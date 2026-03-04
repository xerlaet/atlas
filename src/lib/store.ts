import { create } from "zustand";

interface GraphStore {
  selectedNode: string | null;
  isPanelOpen: boolean;
  panelWidth: number;
  cameraTrigger: number; // Increment to trigger camera moves
  isCameraDirty: boolean; // True if user moved the camera
  uplinkDepth: number;
  backlinkDepth: number;
  showControls: boolean;
  isPanelHidden: boolean;
  isReady: boolean;
  isSearchOpen: boolean;
  theme: "dark" | "light";
  
  setSelectedNode: (id: string | null) => void;
  setPanelOpen: (isOpen: boolean) => void;
  setPanelWidth: (width: number) => void;
  setCameraDirty: (isDirty: boolean) => void;
  triggerCamera: () => void;
  setUplinkDepth: (depth: number) => void;
  setBacklinkDepth: (depth: number) => void;
  setShowControls: (show: boolean) => void;
  setPanelHidden: (hidden: boolean) => void;
  setReady: (ready: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  toggleTheme: () => void;
}

export const useGraphStore = create<GraphStore>((set) => ({
  selectedNode: null,
  isPanelOpen: false,
  panelWidth: 700, // Default width in px
  cameraTrigger: 0,
  isCameraDirty: false,
  uplinkDepth: 1,
  backlinkDepth: 1,
  showControls: false,
  isPanelHidden: false,
  isReady: false,
  isSearchOpen: false,
  theme: "dark",
  
  setSelectedNode: (id) => set({ selectedNode: id }),
  setPanelOpen: (isOpen) => set({ isPanelOpen: isOpen }),
  setPanelWidth: (width) => set({ panelWidth: width }),
  setCameraDirty: (isDirty) => set({ isCameraDirty: isDirty }),
  triggerCamera: () => set((state) => ({ cameraTrigger: state.cameraTrigger + 1, isCameraDirty: false })),
  setUplinkDepth: (depth) => set({ uplinkDepth: depth }),
  setBacklinkDepth: (depth) => set({ backlinkDepth: depth }),
  setShowControls: (show) => set({ showControls: show }),
  setPanelHidden: (hidden) => set({ isPanelHidden: hidden }),
  setReady: (ready) => set({ isReady: ready }),
  setSearchOpen: (open) => set({ isSearchOpen: open }),
  toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));
