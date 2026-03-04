"use client";

import { useEffect } from "react";
import { useGraphStore } from "@/lib/store";

export default function ThemeInitializer() {
  const theme = useGraphStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  }, [theme]);

  return null;
}
