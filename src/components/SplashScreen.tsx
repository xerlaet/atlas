"use client";

import { useGraphStore } from "@/lib/store";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const isReady = useGraphStore((state) => state.isReady);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => setShouldRender(false), 1000); // Wait for fade animation
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)] transition-opacity duration-1000 ease-in-out ${
        isReady ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing ring */}
        <div className="absolute w-32 h-32 border border-teal-500/20 rounded-full animate-ping" />
        
        {/* Spinning gradient ring */}
        <div className="w-24 h-24 border-4 border-transparent border-t-teal-400 border-r-teal-400/30 rounded-full animate-spin" />
        
        {/* Central Core */}
        <div className="absolute w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.8)] animate-pulse" />
      </div>

      <div className="mt-12 flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold tracking-[0.5em] text-teal-500 uppercase animate-pulse">
          Atlas
        </h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-medium">
          Fetching Insights...
        </p>
      </div>
      
      {/* Bottom loading bar (simulated) */}
      <div className="absolute bottom-20 w-48 h-[1px] bg-slate-800 overflow-hidden">
        <div className="h-full bg-teal-500/50 animate-[loading_2s_infinite_ease-in-out]" />
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
