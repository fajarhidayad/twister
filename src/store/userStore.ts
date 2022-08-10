import create from "zustand";
import { inferQueryOutput } from "#/utils/trpc";

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

export type UserProfile = inferQueryOutput<"user.getUserProfile">;

interface UserProfileState {
  userProfile: UserProfile | null;
  setUserProfile: (user: UserProfile) => void;
}

export const useUserProfileStore = create<UserProfileState>()((set, get) => ({
  userProfile: null,
  setUserProfile: (user) =>
    set({
      userProfile: user,
    }),
}));
