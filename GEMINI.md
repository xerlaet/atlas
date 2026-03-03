# GEMINI.md - Project Context: Atlas (3D Digital Garden)

## Project Overview
**Atlas** is a minimalist, high-performance personal "Digital Garden" built with Next.js. It visualizes an Obsidian markdown vault as a persistent, full-screen 3D force-directed graph. Notes are displayed in a slide-out side panel, supporting Obsidian-specific features like WikiLinks, LaTeX, and TikZ diagrams.

### Core Technologies
- **Framework:** Next.js 16 (App Router, TypeScript)
- **3D Visualization:** `react-force-graph-3d` (built on Three.js)
- **Styling:** Tailwind CSS v4 + `@tailwindcss/typography`
- **State Management:** `zustand` (handles camera state, node selection, and panel visibility)
- **Markdown Pipeline:** `react-markdown` with `remark-wiki-link`, `remark-math`, `rehype-katex`, and custom TikZ rendering.
- **Data Fetching:** Server-side recursive parsing of the `content/` directory.

## Architecture & Layout
The project uses **Next.js Parallel Routes** to ensure the 3D graph remains persistent and does not unmount or reload during navigation.

- **`src/app/layout.tsx`**: Defines the root layout, rendering the `@graph` slot as a background layer and `{children}` as the foreground (note panel).
- **`src/app/@graph/page.tsx`**: Renders the `ForceGraph` component.
- **`src/app/notes/[slug]/page.tsx`**: Handles individual note rendering in the side panel.
- **`src/lib/notes.ts`**: The "engine" that recursively flattens the nested `content/` directory into a slug-based lookup map for WikiLink resolution.

## Key Features & Conventions
### 1. WikiLink Resolution
Obsidian WikiLinks `[[Link Name]]` are resolved using a flat dictionary built at build time. This allows linking to notes nested deep in subfolders without specifying the full path.

### 2. 3D Graph Interaction
- **Camera Fly-to:** Clicking a node or navigating to a note URL triggers a camera "fly-to" animation in the 3D graph.
- **Persistent State:** The graph state (positions, camera) is maintained across note transitions via the Zustand store (`src/lib/store.ts`).
- **Performance:** Server components are used for data fetching and markdown parsing, while the graph and interactive UI are client components.

### 3. Markdown Rendering
- **LaTeX:** Supported via `remark-math` and `rehype-katex`.
- **TikZ:** Intercepts `tikz` code blocks and renders them using `tikzjax` (loaded dynamically on the client).
- **Images:** Internal images should be placed in `public/attachments/`.

## Development Commands
- `npm run dev`: Start the development server at `http://localhost:3000`.
- `npm run build`: Build the static/server assets.
- `npm run start`: Run the production build locally.
- `npm run lint`: Run ESLint checks.

## Content Management
All notes reside in the `content/` directory. Subdirectories are supported and encouraged; the system automatically flattens them for navigation. Images and other static assets should be placed in `public/attachments/`.

## Directives for AI Interactions
- **Surgical Updates:** When modifying the markdown pipeline or graph logic, ensure you don't break the persistence of the 3D canvas.
- **Type Safety:** Maintain strict TypeScript typing, especially for the `GraphData` and `NoteMetadata` interfaces in `src/lib/notes.ts`.
- **Minimalism:** Adhere to the "Minimalism" mandate in `Instructions.md`. Avoid redundant UI components; favor lean, functional code.
