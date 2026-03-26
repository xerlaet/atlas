"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useGraphStore } from "@/lib/store";
import { GripVertical } from "lucide-react";
import PanelController from "./PanelController";

interface Props {
  children: React.ReactNode;
}

export default function NotePanel({ children }: Props) {
  const { panelWidth, setPanelWidth, isPanelHidden } = useGraphStore();
  const [isResizing, setIsResizing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Helper to join classes
  const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

  useEffect(() => {
    if (panelWidth === 700) {
      const idealWidth = Math.min(700, window.innerWidth * 0.4);
      if (idealWidth !== 700) setPanelWidth(idealWidth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        style={{ '--panel-width': `${panelWidth}px` } as React.CSSProperties}
        className={cn(
          "fixed top-[94px] md:top-6 bottom-6 bg-[var(--background-panel)] backdrop-blur-xl border border-[var(--color8)] rounded-[22px] shadow-panel z-50 overflow-hidden pointer-events-auto transition-all duration-300 ease-out origin-top-right",
          "inset-x-6 md:inset-x-auto md:right-6 md:w-[var(--panel-width)]",
          isPanelHidden ? "opacity-0 scale-95 pointer-events-none translate-x-4" : "opacity-100 scale-100 translate-x-0"
        )}
      >
        <div 
          onMouseDown={startResizing}
          className="absolute top-0 left-0 w-3 h-full cursor-col-resize hover:bg-teal-500/10 transition-colors z-50 hidden md:flex items-center justify-center group/handle"
        >
           <div className="hidden group-hover/handle:block text-teal-400 opacity-50">
             <GripVertical size={16} />
           </div>
        </div>

        <div className="relative h-full overflow-y-auto p-6 md:p-8">
          <div className="pb-24">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
