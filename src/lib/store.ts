import { create } from "zustand";

interface GraphStore {
  selectedNode: string | null;
  isPanelOpen: boolean;
  panelWidth: number;
  cameraTrigger: number; // Increment to trigger camera moves
  isCameraDirty: boolean; // True if user moved the camera
  
  setSelectedNode: (id: string | null) => void;
  setPanelOpen: (isOpen: boolean) => void;
  setPanelWidth: (width: number) => void;
  setCameraDirty: (isDirty: boolean) => void;
  triggerCamera: () => void;
}

export const useGraphStore = create<GraphStore>((set) => ({
  selectedNode: null,
  isPanelOpen: false,
  panelWidth: 700, // Default width in px
  cameraTrigger: 0,
  isCameraDirty: false,
  
  setSelectedNode: (id) => set({ selectedNode: id }),
  setPanelOpen: (isOpen) => set({ isPanelOpen: isOpen }),
  setPanelWidth: (width) => set({ panelWidth: width }),
  setCameraDirty: (isDirty) => set({ isCameraDirty: isDirty }),
  triggerCamera: () => set((state) => ({ cameraTrigger: state.cameraTrigger + 1, isCameraDirty: false })),
}));
