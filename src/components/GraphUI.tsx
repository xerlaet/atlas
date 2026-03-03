"use client";

import { useGraphStore } from "@/lib/store";
import { RotateCcw, Home, Settings, CircleHelp, Maximize2, Search as SearchIcon } from "lucide-react";
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
    showSettings,
    showHelp,
    setShowSettings,
    setShowHelp,
    isPanelHidden,
    setPanelHidden,
    setSearchOpen
  } = useGraphStore();
  const router = useRouter();
  const params = useParams();
  
  const isHome = params?.slug === "home";
  const hasSelectedNote = !!params?.slug;

  return (
    <>
      {/* Top Left: Trigger Icons and Bubble Panel */}
      <div className="fixed top-6 left-6 flex flex-col gap-4 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="p-3 rounded-full transition-all duration-300 backdrop-blur-xl border bg-slate-900/10 border-white/20 text-slate-400 hover:border-teal-500/40 hover:text-teal-400 hover:bg-slate-900/40 flex items-center justify-center group cursor-pointer"
            title="Search (Ctrl+K or /)"
          >
            <SearchIcon size={20} className="group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className={cn(
              "p-3 rounded-full transition-all duration-300 backdrop-blur-xl border flex items-center justify-center cursor-pointer",
              showSettings 
                ? "bg-teal-500/20 border-teal-500/50 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.2)]" 
                : "bg-slate-900/10 border-white/20 text-slate-400 hover:border-teal-500/40 hover:text-teal-400 hover:bg-slate-900/40"
            )}
            title="Toggle Settings"
          >
            <Settings size={20} />
          </button>

          <button
            onClick={() => setShowHelp(!showHelp)}
            className={cn(
              "p-3 rounded-full transition-all duration-300 backdrop-blur-xl border flex items-center justify-center cursor-pointer",
              showHelp 
                ? "bg-teal-500/20 border-teal-500/50 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.2)]" 
                : "bg-slate-900/10 border-white/20 text-slate-400 hover:border-teal-500/40 hover:text-teal-400 hover:bg-slate-900/40"
            )}
            title="Toggle Instructions"
          >
            <CircleHelp size={20} />
          </button>
        </div>

        {/* Bubble Panel (appears below icons) */}
        <div 
          className={cn(
            "transition-all duration-300 ease-out origin-top-left",
            (showSettings || showHelp) ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          )}
        >
          <div className="bg-slate-900/80 backdrop-blur-3xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-6 min-w-[300px]">
            {/* Settings Section */}
            {showSettings && (
              <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-400">Settings</span>
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

                <div className="flex flex-col gap-4">
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
              </div>
            )}

            {/* Help Section */}
            {showHelp && (
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-400 border-b border-white/5 pb-4">
                  Instructions
                </span>
                <div className="flex flex-col gap-3">
                  {[
                    { key: "Left Click", action: "Rotate view" },
                    { key: "Right Click", action: "Pan view" },
                    { key: "Scroll Wheel", action: "Zoom in/out" },
                    { key: "Node Click", action: "Open note panel" }
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">{item.key}</span>
                      <span className="text-slate-500 font-mono tracking-tighter">{item.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Top Right: Restore Panel Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setPanelHidden(false)}
          className={cn(
            "p-3 rounded-full transition-all duration-500 backdrop-blur-xl border flex items-center justify-center cursor-pointer",
            // Changed from teal to slate/white to match the top-left icons
            "bg-slate-900/10 border-white/20 text-slate-400 hover:border-teal-500/40 hover:text-teal-400 hover:bg-slate-900/40"
            //(isPanelHidden && hasSelectedNote) ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          )}
          title="Restore Note Panel"
        >
          <Maximize2 size={20} />
        </button>
      </div>

      <Search items={searchIndex} />
    </>
  );
}
