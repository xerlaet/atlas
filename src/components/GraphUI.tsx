"use client";

import { useEffect, useLayoutEffect, useCallback, useRef } from "react";
import { useGraphStore } from "@/lib/store";
import { RotateCcw, Home, SlidersHorizontal, Search as SearchIcon, FileText, Sun, Moon, ArrowLeft } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Search from "./Search";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const sliderConfigs = [
  { label: "Uplink Depth", key: "uplinkDepth" as const, setter: "setUplinkDepth" as const, accent: "#38bdf8", thumbClass: "bg-sky-400", fillClass: "bg-sky-400" },
  { label: "Backlink Depth", key: "backlinkDepth" as const, setter: "setBacklinkDepth" as const, accent: "#d946ef", thumbClass: "bg-fuchsia-400", fillClass: "bg-fuchsia-400" },
  { label: "Spin Speed", key: "spinSpeed" as const, setter: "setSpinSpeed" as const, accent: "#2dd4bf", thumbClass: "bg-teal-400", fillClass: "bg-teal-400" },
];

interface GraphUIProps {
  searchIndex: { title: string; slug: string }[];
}

export default function GraphUI({ searchIndex }: GraphUIProps) {
  const { 
    triggerCamera, 
    isCameraDirty,
    showControls,
    setShowControls,
    isPanelHidden,
    setPanelHidden,
    setSearchOpen,
    isSearchOpen,
    theme,
    toggleTheme
  } = useGraphStore();

  const sliderValues = {
    uplinkDepth: useGraphStore((s) => s.uplinkDepth),
    backlinkDepth: useGraphStore((s) => s.backlinkDepth),
    spinSpeed: useGraphStore((s) => s.spinSpeed),
  };
  
  const router = useRouter();
  const params = useParams();
  
  const isHome = params?.slug === "home";

  // Keybind handler stored in ref so it always reads fresh state
  const handlerRef = useRef<(e: KeyboardEvent) => void>(() => {});
  
  useLayoutEffect(() => {
    handlerRef.current = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isTyping =
        activeEl?.tagName === "TEXTAREA" ||
        (activeEl?.tagName === "INPUT" && (activeEl as HTMLInputElement).type !== "range");

      if (isTyping) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || (e.altKey && e.key !== "ArrowLeft")) return;

      const state = useGraphStore.getState();

      if (e.key === "Escape") {
        if (state.isSearchOpen) { state.setSearchOpen(false); return; }
        if (state.showControls || !state.isPanelHidden) {
          state.setShowControls(false);
          state.setPanelHidden(true);
          return;
        }
        return;
      }

      switch (e.key.toLowerCase()) {
        case "/":
          e.preventDefault();
          state.setSearchOpen(true);
          break;
        case "c":
          e.preventDefault();
          state.setShowControls(!state.showControls);
          break;
        case "n":
          e.preventDefault();
          state.setPanelHidden(!state.isPanelHidden);
          break;
        case "t":
          e.preventDefault();
          state.toggleTheme();
          break;
        case "r":
          if (state.isCameraDirty) {
            e.preventDefault();
            state.triggerCamera();
          }
          break;
        case "h":
          if (params?.slug !== "home") {
            e.preventDefault();
            router.push("/notes/home");
          }
          break;
        case "s":
          e.preventDefault();
          if (state.spinSpeed > 0) {
            state.setSpinSpeed(0);
          } else {
            state.setSpinSpeed(state.lastActiveSpinSpeed);
          }
          break;
      }
    };
  });

  // Single stable effect — never re-runs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => handlerRef.current(e);
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  const activeSliderRef = useRef<{ el: HTMLElement; setter: typeof sliderConfigs[number]["setter"]; min: number; max: number } | null>(null);

  const handleSliderMove = useCallback((clientX: number) => {
    const active = activeSliderRef.current;
    if (!active) return;
    const rect = active.el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const value = Math.round(active.min + pct * (active.max - active.min));
    const storeSetter = useGraphStore.getState()[active.setter] as (v: number) => void;
    storeSetter(value);
  }, []);

  const handleSliderPointerDown = useCallback((
    e: React.PointerEvent,
    config: typeof sliderConfigs[number]
  ) => {
    e.preventDefault();
    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);
    activeSliderRef.current = { el, setter: config.setter, min: 0, max: 5 };
    handleSliderMove(e.clientX);
  }, [handleSliderMove]);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => handleSliderMove(e.clientX);
    const onPointerUp = () => { activeSliderRef.current = null; };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [handleSliderMove]);

  return (
    <>
      {/* Top Left: Trigger Icons and Bubble Panel */}
      <div className="fixed top-6 left-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* 1. Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-3 rounded-full transition-all duration-300 backdrop-blur-xl border bg-slate-900/10 border-white/20 text-[var(--color7)] hover:border-[var(--color4)]/40 hover:bg-slate-900/40 flex items-center justify-center group cursor-pointer"
            style={{ color: isSearchOpen ? 'var(--color1)' : 'inherit' }}
            title="Search (/)"
          >
            <SearchIcon size={20} className="transition-transform" />
          </button>

          {/* 2. Controls Button */}
          <button
            onClick={() => setShowControls(!showControls)}
            className={cn(
              "p-3 rounded-full transition-all duration-300 backdrop-blur-xl border flex items-center justify-center cursor-pointer",
              showControls 
                ? "bg-[var(--color4)]/20 border-[var(--color4)]/50 shadow-[0_0_20px_rgba(20,184,166,0.2)]" 
                : "bg-slate-900/10 border-white/20 text-[var(--color7)] hover:border-[var(--color4)]/40 hover:bg-slate-900/40"
            )}
            style={{ color: showControls ? 'var(--color1)' : 'inherit' }}
            title="Toggle Controls (C)"
          >
            <SlidersHorizontal size={20} />
          </button>

          {/* 3. Files (Note Panel) Toggle Button */}
          <button
            onClick={() => setPanelHidden(!isPanelHidden)}
            className={cn(
              "p-3 rounded-full transition-all duration-300 backdrop-blur-xl border flex items-center justify-center cursor-pointer",
              !isPanelHidden 
                ? "bg-[var(--color4)]/20 border-[var(--color4)]/50 shadow-[0_0_20px_rgba(20,184,166,0.2)]" 
                : "bg-slate-900/10 border-white/20 text-[var(--color7)] hover:border-[var(--color4)]/40 hover:bg-slate-900/40"
            )}
            style={{ color: !isPanelHidden ? 'var(--color1)' : 'inherit' }}
            title="Toggle Notes (N)"
          >
            <FileText size={20} />
          </button>
        </div>

        <div 
          className={cn(
            "transition-all duration-300 ease-out origin-top-left pointer-events-auto",
            showControls ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          )}
        >
            <div className="bg-[var(--background-panel)] backdrop-blur-xl border border-[var(--color8)] p-6 rounded-[22px] shadow-panel flex flex-col gap-8 min-w-[320px]">
            {/* Controls Header & Nav Actions */}
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span style={{ color: 'var(--color-ui-accent)' }}>Controls</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTheme}
                    style={{ color: 'var(--color-ui-accent)' }}
                    className="p-1.5 rounded-lg transition-all cursor-pointer hover:bg-teal-500/10"
                    title="Toggle Theme (T)"
                  >
                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  </button>
                  <button
                    onClick={() => router.push("/notes/home")}
                    disabled={isHome}
                    style={{ color: isHome ? 'var(--color8)' : 'var(--color-ui-accent)' }}
                    className={cn(
                      "p-1.5 rounded-lg transition-all cursor-pointer",
                      !isHome && "hover:bg-teal-500/10"
                    )}
                    title="Go to Home (H)"
                  >
                    <Home size={16} />
                  </button>
                  <button
                    onClick={triggerCamera}
                    disabled={!isCameraDirty}
                    style={{ color: !isCameraDirty ? 'var(--color8)' : 'var(--color-ui-accent)' }}
                    className={cn(
                      "p-1.5 rounded-lg transition-all cursor-pointer",
                      isCameraDirty && "hover:bg-teal-500/10"
                    )}
                    title="Reset Camera (R)"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>
              </div>

              {/* Sliders Section */}
              <div className="flex flex-col gap-5">
                {sliderConfigs.map((config) => {
                  const value = sliderValues[config.key];
                  const pct = (value / 5) * 100;
                  return (
                    <div key={config.key} className="flex flex-col gap-2">
                      <div className="flex justify-between text-[10px] uppercase tracking-wider font-bold" style={{ color: config.accent }}>
                        <span>{config.label}</span>
                        <span>{value}</span>
                      </div>
                      <div
                        onPointerDown={(e) => handleSliderPointerDown(e, config)}
                        className="w-full h-4 flex items-center cursor-pointer select-none"
                      >
                        <div className="relative w-full h-1 rounded-lg" style={{ backgroundColor: 'var(--color8)' }}>
                          <div
                            className={`absolute top-0 left-0 h-full rounded-lg ${config.fillClass}`}
                            style={{ width: `${pct}%` }}
                          />
                          <div
                            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-md ${config.thumbClass}`}
                            style={{ left: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interaction Section */}
              <div className="flex flex-col gap-6 border-t border-white/5 pt-6">
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

                <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/5 pt-6">
                  {/* Column 1: Search, Controls, Notes, Back, Close */}
                  <div className="flex flex-col gap-3">
                    {[
                      { key: "/", action: "Search" },
                      { key: "C", action: "Toggle Controls" },
                      { key: "N", action: "Toggle Notes" },
                      { key: "Esc", action: "Close" },
                      { key: "Alt + Left", action: "Back" },
                    ].map((item) => (
                      <div key={item.key} className="flex justify-between items-center text-[11px]">
                        <div className="flex items-center gap-1">
                          {item.key.split(" + ").map((k, i, arr) => (
                            <div key={i} className="flex items-center gap-1">
                              <kbd className="px-1.5 h-[18px] rounded bg-[var(--background-darker)] border border-[var(--color8)] text-[var(--color-kbd-text)] font-mono text-[9px] min-w-[24px] text-center flex items-center justify-center">
                                {k === "Left" ? <ArrowLeft size={10} strokeWidth={2.5} /> : k}
                              </kbd>
                              {i < arr.length - 1 && <span className="text-[10px] text-slate-600">+</span>}
                            </div>
                          ))}
                        </div>
                        <span className="text-slate-500 font-mono tracking-tighter italic ml-2">{item.action}</span>
                      </div>
                    ))}
                  </div>
                  {/* Column 2: Theme, Home, Reset, Spin */}
                  <div className="flex flex-col gap-3">
                    {[
                      { key: "T", action: "Toggle Theme" },
                      { key: "H", action: "Go to Home" },
                      { key: "R", action: "Reset Camera" },
                      { key: "S", action: "Toggle Spin" },
                    ].map((item) => (
                      <div key={item.key} className="flex justify-between items-center text-[11px]">
                        <div className="flex items-center gap-1">
                          {item.key.split(" + ").map((k, i, arr) => (
                            <div key={i} className="flex items-center gap-1">
                              <kbd className="px-1.5 h-[18px] rounded bg-[var(--background-darker)] border border-[var(--color8)] text-[var(--color-kbd-text)] font-mono text-[9px] min-w-[24px] text-center flex items-center justify-center">
                                {k}
                              </kbd>
                              {i < arr.length - 1 && <span className="text-[10px] text-slate-600">+</span>}
                            </div>
                          ))}
                        </div>
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

      <Search items={searchIndex} />
    </>
  );
}
