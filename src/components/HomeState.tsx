"use client";

import { useEffect } from "react";
import { useGraphStore } from "@/lib/store";

export default function HomeState() {
  const { setPanelOpen } = useGraphStore();

  useEffect(() => {
    // When at root, we might want to focus Home.md
    // The Graph component already handles "home" default if slug is missing
    setPanelOpen(false);
  }, [setPanelOpen]);

  return null;
}
