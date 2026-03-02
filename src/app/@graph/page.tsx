import { getGraphData } from "@/lib/notes";
import ForceGraph from "./ForceGraph";
import GraphUI from "@/components/GraphUI";

export default async function GraphPage() {
  const { graph } = await getGraphData();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <ForceGraph data={graph} />
      <GraphUI />
    </div>
  );
}
