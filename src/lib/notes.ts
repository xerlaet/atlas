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
  x?: number;
  y?: number;
  z?: number;
  isStub?: boolean;
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
 * Simple slugify for stub nodes to match the Python script's behavior
 */
function githubSlugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
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
  const stubSlugToTitle: Record<string, string> = {};
  
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
      const target = normalizeWikiLink(match[1]);
      metadata.links.push(target);
    }

    // 2. Detect standard Markdown links [Alias](/notes/slug)
    const markdownLinkRegex = /\[(.*?)\]\((\/notes\/([^\s\)]+))\)/g;
    while ((match = markdownLinkRegex.exec(content)) !== null) {
      const alias = match[1];
      const linkSlug = match[3].split("#")[0];
      if (!metadata.links.includes(linkSlug)) {
        metadata.links.push(linkSlug);
        // Hint for stub title: prefer the alias if it's not already a known note
        if (alias && !stubSlugToTitle[linkSlug]) {
          stubSlugToTitle[linkSlug] = alias;
        }
      }
    }

    notes[slug] = metadata;
    titleToId[title] = slug;
    slugToTitle[slug] = title;
  });

  // Second pass: Build graph and handle stub nodes
  const nodes: GraphNode[] = Object.values(notes).map((note) => ({
    id: note.title,
    title: note.title,
    path: note.slug,
    isStub: false,
  }));

  const links: GraphLink[] = [];
  const stubs = new Map<string, { title: string, slug: string }>();

  Object.values(notes).forEach((note) => {
    note.links.forEach((linkIdentifier) => {
      let targetId = "";
      let isStub = false;
      let stubTitle = "";
      let stubSlug = "";

      if (titleToId[linkIdentifier]) {
        targetId = linkIdentifier; // titleToId maps title to slug, but node ID is title
      } else if (slugToTitle[linkIdentifier]) {
        targetId = slugToTitle[linkIdentifier];
      } else {
        // This is a stub node
        isStub = true;
        // If linkIdentifier is a slug, we might have a hint
        if (stubSlugToTitle[linkIdentifier]) {
          stubTitle = stubSlugToTitle[linkIdentifier];
          stubSlug = linkIdentifier;
        } else {
          // It's probably a title from a WikiLink that didn't get converted
          stubTitle = linkIdentifier;
          stubSlug = githubSlugify(linkIdentifier);
        }
        targetId = stubTitle;
      }

      if (targetId && targetId !== note.title) {
        if (isStub && !titleToId[targetId]) {
          stubs.set(targetId, { title: stubTitle, slug: stubSlug });
        }
        links.push({
          source: note.title,
          target: targetId,
        });
      }
    });
  });

  // Add stub nodes to the graph
  stubs.forEach((stubInfo, id) => {
    // If it's already in nodes, skip
    if (nodes.find(n => n.id === id)) return;

    nodes.push({
      id: id,
      title: stubInfo.title,
      path: stubInfo.slug,
      isStub: true,
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
