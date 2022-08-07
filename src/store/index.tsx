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
  signIn: (user) => set((state) => ({ user })),
  signOut: () => set((state) => ({ user: null })),
}));
