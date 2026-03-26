"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGraphStore } from "@/lib/store";
import { Search as SearchIcon, FileText, CornerDownLeft } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SearchProps {
  items: { title: string; slug: string }[];
}

export default function Search({ items }: SearchProps) {
  const { isSearchOpen, setSearchOpen } = useGraphStore();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Simple but fast fuzzy-ish filtering
  const results = useMemo(() => {
    if (!query.trim()) return items.slice(0, 10);
    const lowQuery = query.toLowerCase();
    return items
      .filter((item) => item.title.toLowerCase().includes(lowQuery))
      .sort((a, b) => {
        // Boost exact matches or starts-with
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        if (aTitle === lowQuery) return -1;
        if (bTitle === lowQuery) return 1;
        if (aTitle.startsWith(lowQuery) && !bTitle.startsWith(lowQuery)) return -1;
        if (!aTitle.startsWith(lowQuery) && bTitle.startsWith(lowQuery)) return 1;
        return 0;
      })
      .slice(0, 8);
  }, [query, items]);

  // Reset query when opening search
  useEffect(() => {
    if (!isSearchOpen) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuery("");
    setSelectedIndex(0);
    setTimeout(() => inputRef.current?.focus(), 10);
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, setSearchOpen]);

  const handleSelect = (index: number) => {
    const item = results[index];
    if (item) {
      router.push(`/notes/${item.slug}`);
      setSearchOpen(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      handleSelect(selectedIndex);
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (results.length > 0) {
        setQuery(results[0].title);
      }
    }
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 pointer-events-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={() => setSearchOpen(false)}
      />

      {/* Search Box */}
      <div className="relative w-full max-w-2xl bg-[var(--background-panel)] backdrop-blur-2xl border border-[var(--color8)] rounded-[22px] shadow-[0_30px_100px_rgba(0,0,0,0.7)] overflow-hidden animate-in zoom-in-95 fade-in duration-200">
        <div className="flex items-center px-5 py-4 border-b border-[var(--color8)]/30">
          <SearchIcon className="w-5 h-5 text-[var(--color7)]" />
          <input
            ref={inputRef}
            className="flex-1 bg-transparent border-none outline-none px-4 text-[var(--foreground)] placeholder-[var(--color7)] text-lg font-light"
            placeholder="Search notes... (↑↓ to navigate, ↵ to open)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={onKeyDown}
          />
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-[var(--background-darker)] border border-[var(--color8)]/30 text-[10px] text-[var(--color7)] font-mono">
            ESC
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto scrollbar-hide" ref={scrollRef}>
          {results.length > 0 ? (
            <div className="p-2 flex flex-col gap-1">
              {results.map((item, index) => (
                <button
                  key={item.slug}
                  className={cn(
                    "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-150 text-left group",
                    index === selectedIndex 
                      ? "bg-teal-500/20 text-teal-200 border border-teal-500/30" 
                      : "text-[var(--color7)] hover:bg-[var(--color8)]/20 border border-transparent"
                  )}
                  onClick={() => handleSelect(index)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <FileText className={cn(
                    "w-4 h-4 transition-colors",
                    index === selectedIndex ? "text-teal-400" : "text-[var(--color7)]"
                  )} />
                  <span className={cn(
                    "flex-1 font-medium truncate",
                    index === selectedIndex ? "text-[var(--color15)]" : "text-[var(--foreground)]"
                  )}>{item.title}</span>
                  {index === selectedIndex && (
                    <div className="flex items-center gap-1 text-[10px] text-teal-500/60 uppercase tracking-widest font-bold">
                      <span className="mr-1">Open</span>
                      <CornerDownLeft className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="px-10 py-20 text-center flex flex-col items-center gap-3">
              <div className="p-4 rounded-full bg-[var(--background-darker)] text-[var(--color7)]">
                <SearchIcon className="w-8 h-8" />
              </div>
              <p className="text-[var(--color7)] font-light">
                No notes found for &quot;<span className="text-[var(--foreground)] italic">{query}</span>&quot;
              </p>
            </div>
          )}
        </div>

        <div className="px-5 py-3 border-t border-[var(--color8)]/30 bg-[var(--background-darker)]/40 flex justify-between items-center text-[10px] uppercase tracking-wider font-bold text-[var(--color7)]">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5">
              <kbd className="px-1 py-0.5 rounded bg-[var(--background-darker)] border border-[var(--color8)]/30 text-[var(--color-kbd-text)]">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1 py-0.5 rounded bg-[var(--background-darker)] border border-[var(--color8)]/30 text-[var(--color-kbd-text)]">↵</kbd> Select
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1 py-0.5 rounded bg-[var(--background-darker)] border border-[var(--color8)]/30 text-[var(--color-kbd-text)]">Tab</kbd> Complete
            </span>
          </div>
          <span>{items.length} Total Notes</span>
        </div>
      </div>
    </div>
  );
}
