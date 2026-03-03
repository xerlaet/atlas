"use client";

import { useEffect } from "react";
import { useGraphStore } from "@/lib/store";
import { RotateCcw, Home, SlidersHorizontal, Search as SearchIcon, FileText } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Search from "./Search";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GraphUIProps {
  searchIndex: { title: string; slug: string }[];
}

export default function GraphUI({ searchIndex }: GraphUIProps) {
  const { 
    triggerCamera, 
    isCameraDirty,
    uplinkDepth,
    backlinkDepth,
    setUplinkDepth,
    setBacklinkDepth,
    showControls,
    setShowControls,
    isPanelHidden,
    setPanelHidden,
    setSearchOpen,
    isSearchOpen
  } = useGraphStore();
  
  const router = useRouter();
  const params = useParams();
  
  const isHome = params?.slug === "home";

  // Global Keybinds
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInputFocused = 
        document.activeElement?.tagName === "INPUT" || 
        document.activeElement?.tagName === "TEXTAREA";

      // 1. Layered Escape Logic
      if (e.key === "Escape") {
        if (isSearchOpen) {
          setSearchOpen(false);
          return;
        }
        // Close both simultaneously as requested
        if (showControls || !isPanelHidden) {
          setShowControls(false);
          setPanelHidden(true);
          return;
        }
        return;
      }

      // Ignore single-letter binds if an input is focused
      if (isInputFocused) return;

      switch (e.key.toLowerCase()) {
        case "/":
          e.preventDefault();
          setSearchOpen(true);
          break;
        case "c":
          e.preventDefault();
          setShowControls(!showControls);
          break;
        case "n":
          e.preventDefault();
          setPanelHidden(!isPanelHidden);
          break;
        case "r":
          if (isCameraDirty) {
            e.preventDefault();
            triggerCamera();
          }
          break;
        case "h":
          if (!isHome) {
            e.preventDefault();
            router.push("/notes/home");
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isSearchOpen, setSearchOpen, 
    showControls, setShowControls, 
    isPanelHidden, setPanelHidden, 
    isCameraDirty, triggerCamera, 
    isHome, router
  ]);

  return (
    <>
      {/* Top Left: Trigger Icons and Bubble Panel */}
      <div className="fixed top-6 left-6 flex flex-col gap-3">
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* 1. Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-3 rounded-full transition-all duration-300 backdrop-blur-xl border bg-slate-900/10 border-white/20 text-slate-400 hover:border-teal-500/40 hover:text-teal-400 hover:bg-slate-900/40 flex items-center justify-center group cursor-pointer"
            title="Search (Ctrl+K or /)"
          >
            <SearchIcon size={20} className="transition-transform" />
          </button>

          {/* 2. Controls Button */}
          <button
            onClick={() => setShowControls(!showControls)}
            className={cn(
              "p-3 rounded-full transition-all duration-300 backdrop-blur-xl border flex items-center justify-center cursor-pointer",
              showControls 
                ? "bg-teal-500/20 border-teal-500/50 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.2)]" 
                : "bg-slate-900/10 border-white/20 text-slate-400 hover:border-teal-500/40 hover:text-teal-400 hover:bg-slate-900/40"
            )}
            title="Toggle Controls"
          >
            <SlidersHorizontal size={20} />
          </button>

          {/* 3. Files (Note Panel) Toggle Button */}
          <button
            onClick={() => setPanelHidden(!isPanelHidden)}
            className={cn(
              "p-3 rounded-full transition-all duration-300 backdrop-blur-xl border flex items-center justify-center cursor-pointer",
              !isPanelHidden 
                ? "bg-teal-500/20 border-teal-500/50 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.2)]" 
                : "bg-slate-900/10 border-white/20 text-slate-400 hover:border-teal-500/40 hover:text-teal-400 hover:bg-slate-900/40"
            )}
            title={isPanelHidden ? "Show Note Panel" : "Hide Note Panel"}
          >
            <FileText size={20} />
          </button>
        </div>

        {/* Combined Bubble Panel (appears below icons) */}
        <div 
          className={cn(
            "transition-all duration-300 ease-out origin-top-left pointer-events-auto",
            showControls ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          )}
        >
          <div className="bg-slate-900/80 backdrop-blur-3xl border border-white/10 p-6 rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-8 min-w-[320px]">
            {/* Controls Header & Nav Actions */}
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-400">Controls</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => router.push("/notes/home")}
                    disabled={isHome}
                    className={cn(
                      "p-1.5 rounded-lg transition-all cursor-pointer",
                      isHome 
                        ? "text-slate-600 cursor-not-allowed" 
                        : "text-teal-300 hover:text-teal-100 hover:bg-teal-500/10"
                    )}
                    title="Go to Home"
                  >
                    <Home size={16} />
                  </button>
                  <button
                    onClick={triggerCamera}
                    disabled={!isCameraDirty}
                    className={cn(
                      "p-1.5 rounded-lg transition-all cursor-pointer",
                      !isCameraDirty 
                        ? "text-slate-600 cursor-not-allowed" 
                        : "text-teal-300 hover:text-teal-100 hover:bg-teal-500/10"
                    )}
                    title="Reset Camera"
                  >
                    <RotateCcw size={16} className={cn(isCameraDirty && "text-teal-300")} />
                  </button>
                </div>
              </div>

              {/* Sliders Section */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-teal-400/70 font-bold">
                    <span>Uplink Depth</span>
                    <span>{uplinkDepth}</span>
                  </div>
                  <input 
                    type="range" min="0" max="5" step="1" 
                    value={uplinkDepth} 
                    onChange={(e) => setUplinkDepth(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-fuchsia-400/70 font-bold">
                    <span>Backlink Depth</span>
                    <span>{backlinkDepth}</span>
                  </div>
                  <input 
                    type="range" min="0" max="5" step="1" 
                    value={backlinkDepth} 
                    onChange={(e) => setBacklinkDepth(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-fuchsia-400"
                  />
                </div>
              </div>

              {/* Instructions Section */}
              <div className="flex flex-col gap-6 border-t border-white/5 pt-6">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-400/60">
                    Controls
                  </span>
                  <div className="flex flex-col gap-3">
                    {[
                      { key: "Left Click", action: "Rotate view" },
                      { key: "Right Click", action: "Pan view" },
                      { key: "Scroll", action: "Zoom" },
                      { key: "Node Click", action: "Select node" }
                    ].map((item) => (
                      <div key={item.key} className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">{item.key}</span>
                        <span className="text-slate-500 font-mono tracking-tighter italic">{item.action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-400/60">
                    Shortcuts
                  </span>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {/* Column 1: Search, Controls, Notes */}
                    <div className="flex flex-col gap-3">
                      {[
                        { key: "/", action: "Search" },
                        { key: "C", action: "Controls" },
                        { key: "N", action: "Notes" },
                      ].map((item) => (
                        <div key={item.key} className="flex justify-between items-center text-[11px]">
                          <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-teal-300 font-mono text-[9px] min-w-[24px] text-center">
                            {item.key}
                          </kbd>
                          <span className="text-slate-500 font-mono tracking-tighter italic ml-2">{item.action}</span>
                        </div>
                      ))}
                    </div>
                    {/* Column 2: Home, Reset View, Back */}
                    <div className="flex flex-col gap-3">
                      {[
                        { key: "H", action: "Home" },
                        { key: "R", action: "Reset View" },
                        { key: "Esc", action: "Back" }
                      ].map((item) => (
                        <div key={item.key} className="flex justify-between items-center text-[11px]">
                          <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-teal-300 font-mono text-[9px] min-w-[24px] text-center">
                            {item.key}
                          </kbd>
                          <span className="text-slate-500 font-mono tracking-tighter italic ml-2">{item.action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Search items={searchIndex} />
    </>
  );
}
