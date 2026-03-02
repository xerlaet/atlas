"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useGraphStore } from "@/lib/store";
import Link from "next/link";
import { X, GripVertical } from "lucide-react";
import PanelController from "./PanelController";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function NotePanel({ title, children }: Props) {
  const { panelWidth, setPanelWidth } = useGraphStore();
  const [isResizing, setIsResizing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Set initial width only if it hasn't been customized/set yet or is the default
  // Actually, setting it here might be triggering re-renders that break transitions.
  // Let's ensure it's stable.
  useEffect(() => {
    if (panelWidth === 700) { // Only if it's the store's default
      const idealWidth = Math.min(700, window.innerWidth * 0.4);
      if (idealWidth !== 700) setPanelWidth(idealWidth);
    }
  }, []); // Only once on mount

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
        className="fixed top-0 right-0 h-full bg-slate-900/90 backdrop-blur-xl border-l border-slate-800 shadow-2xl z-50 overflow-y-auto pointer-events-auto"
      >
        <div 
          onMouseDown={startResizing}
          className="absolute top-0 left-0 w-1.5 h-full cursor-col-resize hover:bg-teal-500/50 transition-colors z-50 flex items-center justify-center group/handle"
        >
           <div className="hidden group-hover/handle:block text-teal-400">
             <GripVertical size={14} />
           </div>
        </div>

        <div className="relative p-8 pt-6">
          <div className="absolute top-4 right-4 z-20">
            <Link 
              href="/" 
              className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/40 backdrop-blur-md hover:bg-teal-500/20 hover:text-teal-400 transition-all border border-slate-700/50 hover:border-teal-500/50 pointer-events-auto"
              title="Close Note"
            >
              <X size={16} />
            </Link>
          </div>
          
          <div className="pb-24">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
