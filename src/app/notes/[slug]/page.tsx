import { getNoteBySlug, getGraphData } from "@/lib/notes";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import NotePanel from "@/components/NotePanel";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  
  if (!note) return { title: "Atlas" };
  
  return {
    title: `Atlas | ${note.metadata.title}`,
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  const { notes } = await getGraphData();

  if (!note) {
    notFound();
  }

  const slugMap: Record<string, string> = {};
  Object.values(notes).forEach((n) => {
    slugMap[n.title] = n.slug;
  });

  return (
    <NotePanel title={note.metadata.title}>
      <MarkdownRenderer content={note.content} slugMap={slugMap} />
    </NotePanel>
  );
}
