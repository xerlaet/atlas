import { getGraphData } from "@/lib/notes";
import ForceGraph from "./ForceGraph";
import GraphUI from "@/components/GraphUI";

export default async function GraphPage() {
  const { graph, notes } = await getGraphData();
  const searchIndex = Object.values(notes).map((n) => ({ title: n.title, slug: n.slug }));

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <ForceGraph data={graph} />
      <GraphUI searchIndex={searchIndex} />
    </div>
  );
}
