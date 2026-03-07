import { getNoteBySlug, getGraphData } from "@/lib/notes";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import NotePanel from "@/components/NotePanel";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  
  if (!note) return { title: "Atlas" };

  // Extract a clean description from the content (remove markdown formatting)
  const description = note.content
    .replace(/[#*`[\]]/g, '') // Basic markdown strip
    .split('\n')
    .find(line => line.trim().length > 10) // Find first meaningful line
    ?.slice(0, 160) || "A 3D Digital Garden";
  
  return {
    title: `${note.metadata.title} | Atlas`,
    description: description,
    openGraph: {
      title: `${note.metadata.title} | Atlas`,
      description: description,
    },
    twitter: {
      title: `${note.metadata.title} | Atlas`,
      description: description,
    }
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  const { notes } = await getGraphData();

  if (!note) {
    notFound();
  }

  const validSlugs = Object.keys(notes);

  return (
    <NotePanel title={note.metadata.title}>
      <MarkdownRenderer 
        content={note.content} 
        validSlugs={validSlugs} 
      />
    </NotePanel>
  );
}
