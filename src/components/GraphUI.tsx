"use client";

import { useGraphStore } from "@/lib/store";
import { RotateCcw, Home } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function GraphUI() {
  const { isPanelOpen, panelWidth, triggerCamera, isCameraDirty } = useGraphStore();
  const router = useRouter();
  const params = useParams();
  
  const isHome = params?.slug === "home";

  return (
    <div 
      className={cn(
        "fixed bottom-8 flex items-center gap-2 px-5 py-3 bg-slate-900/80 backdrop-blur-2xl border border-teal-500/30 rounded-full transition-all duration-75 ease-out pointer-events-auto z-50 shadow-[0_0_30px_rgba(20,184,166,0.15)]",
        isPanelOpen 
          ? "left-[calc((100%-var(--pw))/2)] -translate-x-1/2" 
          : "left-1/2 -translate-x-1/2"
      )}
      style={{ "--pw": `${panelWidth}px` } as any}
    >
      <div className="flex items-center gap-3 border-r border-teal-500/20 pr-4">
        <button
          onClick={() => router.push("/notes/home")}
          disabled={isHome}
          className={cn(
            "flex items-center justify-center transition-all group",
            isHome 
              ? "text-slate-600 cursor-not-allowed opacity-50" 
              : "text-teal-300 hover:text-teal-100 hover:scale-110"
          )}
          title={isHome ? "Already at Home" : "Go to Home"}
        >
          <Home size={16} />
        </button>

        <button
          onClick={triggerCamera}
          disabled={!isCameraDirty}
          className={cn(
            "flex items-center justify-center transition-all group",
            !isCameraDirty 
              ? "text-slate-600 cursor-not-allowed opacity-50" 
              : "text-teal-300 hover:text-teal-100 hover:scale-110"
          )}
          title={!isCameraDirty ? "View is already centered" : "Reset Camera View"}
        >
          <RotateCcw size={16} className={cn(isCameraDirty && "group-active:rotate-[-180deg] transition-transform duration-500")} />
        </button>
      </div>

      <p className="text-[10px] uppercase tracking-[0.3em] text-teal-300 font-bold whitespace-nowrap pl-2">
        Drag to Rotate &bull; Scroll to Zoom &bull; Click Node to Read
      </p>
    </div>
  );
}
