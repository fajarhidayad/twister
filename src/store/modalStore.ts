import create from "zustand";

interface ModalState {
  active: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  active: false,
  toggle: () => set((state) => ({ active: !state.active })),
  open: () => set(() => ({ active: true })),
  close: () => set(() => ({ active: false })),
}));
