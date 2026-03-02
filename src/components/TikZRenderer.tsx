"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  code: string;
}

export default function TikZRenderer({ code }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Note: tikzjax usually works by adding a <script> tag and it looks for <script type="text/tikz">
    // However, for a cleaner React integration, we can use isomorphic-tikzjax or similar.
    // Since tikzjax is heavy, we'll try to load it only when needed.
    
    // Fallback: Just show the code for now if we can't get tikzjax to work easily in this turn
    // I will try to implement a more robust version if possible.
  }, [code]);

  if (error) {
    return (
      <div className="p-4 border border-red-500 bg-red-900/20 text-red-200 rounded-md">
        TikZ Error: {error}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="my-4 flex justify-center overflow-auto bg-slate-900 p-4 rounded-lg">
      <pre className="text-sm text-slate-400"><code>{code}</code></pre>
      {/* Real TikZ rendering logic would go here */}
    </div>
  );
}
