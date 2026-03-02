"use client";

import { useEffect } from "react";
import { useGraphStore } from "@/lib/store";

export default function PanelController() {
  const { setPanelOpen } = useGraphStore();

  useEffect(() => {
    setPanelOpen(true);
    return () => setPanelOpen(false);
  }, [setPanelOpen]);

  return null;
}
