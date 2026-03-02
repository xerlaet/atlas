# Project: Obsidian 3D Digital Garden (codenamed atlas)

## Core Objective
Create a minimalist, high-performance personal website serving as a "Digital Garden." Initialize a fresh Next.js App Router project from scratch. It will feature a persistent, full-screen 3D force-directed graph of an Obsidian vault. Notes open in a sleek, slide-out side panel over the graph, supporting Obsidian WikiLinks, LaTeX, and TikZ diagrams. 

**Starting State:** The workspace currently only contains the `content/` (markdown files, nested in subfolders) and `public/attachments/` (images) directories.

## Strict AI Directives
- **Initialization:** Start by scaffolding a new Next.js project (App Router, TypeScript, Tailwind) around the existing `content/` folder.
- **Performance First:** Strictly separate Server Components (data fetching/markdown parsing) from Client Components (3D rendering/state).
- **Minimalism:** Write lean, optimized code. No unnecessary wrapper components or redundant UI elements.
- **Fail Gracefully:** If a WikiLink is broken, an image is missing, or TikZ fails to compile, render a styled fallback. Do not crash the page.

## Tech Stack & Tooling
- **Framework:** Next.js (App Router, TypeScript).
- **Visualization:** `react-force-graph-3d` (Three.js).
- **Styling:** Tailwind CSS + `@tailwindcss/typography`.
- **Icons:** `lucide-react`.
- **State Management:** `zustand` (Manage camera fly-to state, selected nodes, and panel open/close state without triggering React Context re-renders on the canvas).

## Architectural Mandates
1. **File Structure & Recursive Data Parsing (`lib/notes.ts`):**
   - Markdown files live in `/content/` and are nested inside multiple subfolders.
   - You MUST recursively traverse the `/content/` directory to find all `.md` files.
   - Build a "flat" dictionary/map at build time: `{ "slugified-filename": "path/to/nested/file.md" }`. This is crucial because Obsidian WikiLinks `[[Like This]]` do not include folder paths. 
   - Node/Link generation for the 3D graph must happen server-side using this flat dictionary.

2. **The UI Layout & Persistence (Parallel Routes):**
   - **The Graph:** Full-screen 3D interactive nodes. It MUST NOT unmount or reload when the user navigates between notes. Implement this using Next.js Parallel Routes (e.g., `app/@graph/page.tsx`).
   - **The Initial Load:** When the user visits the root `/`, the 3D graph camera MUST automatically locate the node representing `Home.md` and smoothly fly to/focus on it.
   - **The Note Panel:** Clicking a node updates the URL and slides in a reading panel from the right (occupying ~35-45% of the viewport). 
   - **Camera Pan Optimization:** When the panel opens, the Zustand store should trigger a camera event to pan the 3D graph slightly left, keeping the active node centered in the remaining visible space.

3. **The Markdown Pipeline (`lib/markdown.ts` & `MarkdownRenderer`):**
   - `react-markdown` (Renderer - MUST run as a Server Component).
   - `gray-matter` (Frontmatter extraction).
   - `github-slugger` (Reliably convert spaced/capitalized Obsidian filenames to URL slugs).
   - `remark-gfm` (Tables, task lists).
   - `remark-math` + `rehype-katex` (LaTeX Equations).
   - `remark-wiki-link` (Native AST parsing of Obsidian `[[WikiLinks]]`. Map these to Next.js `<Link>` components using the flat dictionary).
   - **TikZ Rendering:** Intercept standard code blocks where the language is exactly `tikz` and render via `tikzjax`. **CRITICAL:** The TikZ rendering component MUST be a Client Component loaded via Next.js Dynamic Imports (`next/dynamic` with `ssr: false`) to prevent the heavy WebAssembly payload from blocking the initial page load.

## Implementation Roadmap
1. **Init & Scaffold:** Run the Next.js setup in the current directory. Set up the Parallel Route structure (`app/layout.tsx`, `app/page.tsx`, `app/@graph/page.tsx`, `app/notes/[slug]/page.tsx`).
2. **Data Layer (`lib/notes.ts`):** Build the recursive server-side logic to flatten the `content/` directory into a lookup map, and generate the `nodes` and `links` JSON payload.
3. **State & Persistent Engine:** Build the Zustand store. Build the `ForceGraph3D` Client Component inside the `@graph` route. Implement the `Home.md` default camera focus.
4. **The Renderer:** Build the `MarkdownRenderer` component handling the custom remark/rehype plugins.
5. **UI Polish:** Implement the Tailwind slide-in transitions for the markdown content panel and the dynamic camera offset.
