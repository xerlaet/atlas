"use client";

import dynamic from "next/dynamic";

const TikZRenderer = dynamic(() => import("./TikZRenderer"), { ssr: false });

export default function TikZWrapper({ code }: { code: string }) {
  return <TikZRenderer code={code} />;
}
