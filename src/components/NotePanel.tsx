"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useGraphStore } from "@/lib/store";
import Link from "next/link";
import { GripVertical, Minimize2 } from "lucide-react";
import PanelController from "./PanelController";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function NotePanel({ title, children }: Props) {
  const { panelWidth, setPanelWidth, isPanelHidden, setPanelHidden } = useGraphStore();
  const [isResizing, setIsResizing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Helper to join classes
  const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

  useEffect(() => {
    if (panelWidth === 700) {
      const idealWidth = Math.min(700, window.innerWidth * 0.4);
      if (idealWidth !== 700) setPanelWidth(idealWidth);
    }
  }, []);

  const startResizing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback((e: MouseEvent) => {
    if (isResizing) {
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth >= 300 && newWidth <= 1000) {
        setPanelWidth(newWidth);
      }
    }
  }, [isResizing, setPanelWidth]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);
    }
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  return (
    <>
      <PanelController />
      <div 
        ref={panelRef}
        style={{ width: `${panelWidth}px` }}
        className={cn(
          "fixed top-6 bottom-6 right-6 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden pointer-events-auto transition-all duration-300 ease-out origin-top-right",
          isPanelHidden ? "opacity-0 scale-95 pointer-events-none translate-x-4" : "opacity-100 scale-100 translate-x-0"
        )}
      >
        <div 
          onMouseDown={startResizing}
          className="absolute top-0 left-0 w-3 h-full cursor-col-resize hover:bg-teal-500/10 transition-colors z-50 flex items-center justify-center group/handle"
        >
           <div className="hidden group-hover/handle:block text-teal-400 opacity-50">
             <GripVertical size={16} />
           </div>
        </div>

        <div className="relative h-full overflow-y-auto p-8">
          <div className="pb-24">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
