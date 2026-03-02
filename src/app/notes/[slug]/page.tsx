import { getNoteBySlug, getGraphData } from "@/lib/notes";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import NotePanel from "@/components/NotePanel";
import { notFound } from "next/navigation";

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
