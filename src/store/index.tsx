import create from "zustand";

interface User {
  name: string;
  image: string;
}

interface UserState {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  signIn: (user) => set(() => ({ user })),
  signOut: () => set(() => ({ user: null })),
}));

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
