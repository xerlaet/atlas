import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface NoteMetadata {
  title: string;
  slug: string;
  path: string;
  links: string[];
}

export interface GraphNode {
  id: string;
  title: string;
  path: string;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

/**
 * Recursively gets all markdown files in a directory
 */
function getAllMarkdownFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith(".md")) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

/**
 * Normalizes an Obsidian WikiLink target to a title
 */
function normalizeWikiLink(link: string): string {
  const base = link.split("|")[0];
  return base.split("#")[0].trim();
}

/**
 * Builds the note map and graph data
 */
export async function getGraphData(): Promise<{ 
  notes: Record<string, NoteMetadata>, 
  graph: GraphData 
}> {
  const files = getAllMarkdownFiles(CONTENT_DIR);
  const notes: Record<string, NoteMetadata> = {};
  const titleToId: Record<string, string> = {};
  
  const slugger = new GithubSlugger();

  // First pass: Build metadata
  files.forEach((filePath) => {
    const relativePath = path.relative(CONTENT_DIR, filePath);
    const fileName = path.basename(filePath, ".md");
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);
    
    const title = data.title || fileName;
    
    // Reset slugger for each file to ensure the slug is exactly the filename
    slugger.reset();
    const slug = slugger.slug(fileName);
    
    const metadata: NoteMetadata = {
      title,
      slug,
      path: relativePath,
      links: [],
    };

    const wikiLinkRegex = /\[\[(.*?)\]\]/g;
    let match;
    while ((match = wikiLinkRegex.exec(content)) !== null) {
      metadata.links.push(normalizeWikiLink(match[1]));
    }

    notes[slug] = metadata;
    titleToId[title] = slug;
  });

  // Second pass: Build graph
  const nodes: GraphNode[] = Object.values(notes).map((note) => ({
    id: note.title,
    title: note.title,
    path: note.slug,
  }));

  const links: GraphLink[] = [];
  Object.values(notes).forEach((note) => {
    note.links.forEach((linkTitle) => {
      if (titleToId[linkTitle]) {
        links.push({
          source: note.title,
          target: linkTitle,
        });
      }
    });
  });

  return { notes, graph: { nodes, links } };
}

export async function getNoteBySlug(slug: string) {
  const { notes } = await getGraphData();
  const noteMetadata = notes[slug];
  if (!noteMetadata) {
    console.error(`Note not found for slug: ${slug}`);
    return null;
  }

  const fullPath = path.join(CONTENT_DIR, noteMetadata.path);
  const rawContent = fs.readFileSync(fullPath, "utf-8");
  // Normalize Windows \r\n to \n
  const content = rawContent.replace(/\r\n/g, "\n");
  const { data, content: markdownBody } = matter(content);

  return {
    metadata: {
      ...noteMetadata,
      ...data,
    },
    content: markdownBody,
  };
}
