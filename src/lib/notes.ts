import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import crypto from "crypto";

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
  x?: number;
  y?: number;
  z?: number;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

function getHash(text: string) {
  return crypto.createHash("md5").update(text).digest("hex");
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

let cachedData: { 
  notes: Record<string, NoteMetadata>, 
  graph: GraphData 
} | null = null;

/**
 * Builds the note map and graph data with simple memoization
 */
export async function getGraphData(): Promise<{ 
  notes: Record<string, NoteMetadata>, 
  graph: GraphData 
}> {
  if (cachedData && process.env.NODE_ENV === 'production') {
    return cachedData;
  }
  
  const files = getAllMarkdownFiles(CONTENT_DIR);
  const notes: Record<string, NoteMetadata> = {};
  const titleToId: Record<string, string> = {};
  
  const slugger = new GithubSlugger();

  // First pass: Build metadata
  const slugToTitle: Record<string, string> = {};
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

    // 1. Detect WikiLinks [[Note Name]]
    const wikiLinkRegex = /\[\[(.*?)\]\]/g;
    let match;
    while ((match = wikiLinkRegex.exec(content)) !== null) {
      metadata.links.push(normalizeWikiLink(match[1]));
    }

    // 2. Detect standard Markdown links [Alias](/notes/slug)
    const markdownLinkRegex = /\[.*?\]\((\/notes\/([^\s\)]+))\)/g;
    while ((match = markdownLinkRegex.exec(content)) !== null) {
      const linkSlug = match[2].split("#")[0];
      // We'll resolve these to titles in the second pass since we need all metadata first
      if (!metadata.links.includes(linkSlug)) {
        metadata.links.push(linkSlug);
      }
    }

    notes[slug] = metadata;
    titleToId[title] = slug;
    slugToTitle[slug] = title;
  });

  // Second pass: Build graph
  const nodes: GraphNode[] = Object.values(notes).map((note) => ({
    id: note.title,
    title: note.title,
    path: note.slug,
  }));

  const links: GraphLink[] = [];
  Object.values(notes).forEach((note) => {
    note.links.forEach((linkIdentifier) => {
      // It could be a title (from WikiLink) or a slug (from Markdown link)
      let targetTitle = "";
      if (titleToId[linkIdentifier]) {
        targetTitle = linkIdentifier;
      } else if (slugToTitle[linkIdentifier]) {
        targetTitle = slugToTitle[linkIdentifier];
      }

      if (targetTitle && targetTitle !== note.title) {
        links.push({
          source: note.title,
          target: targetTitle,
        });
      }
    });
  });

  const result = { notes, graph: { nodes, links } };
  cachedData = result;
  return result;
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
