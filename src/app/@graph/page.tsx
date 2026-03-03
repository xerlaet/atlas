import { getGraphData } from "@/lib/notes";
import ForceGraph from "./ForceGraph";

export default async function GraphPage() {
  const { graph } = await getGraphData();

  return (
    <div className="relative h-screen w-screen overflow-hidden pointer-events-auto">
      <ForceGraph data={graph} />
    </div>
  );
}
