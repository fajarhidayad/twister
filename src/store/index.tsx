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

export interface LikeTweet {
  userId: string;
  tweetId: string;
}

type Tweets = inferQueryOutput<"tweet.getAllTweet">;
type Tweet = inferQueryOutput<"tweet.getTweetById">;

interface TweetState {
  tweets: Tweets;
  fetchTweets: (tweets: Tweets) => void;
  tweetById: (id: string) => Tweet | undefined;
}

export const useTweetStore = create<TweetState>()((set, get) => ({
  tweets: [],
  fetchTweets: (tweets) => set(() => ({ tweets })),
  tweetById: (id) => get().tweets.find((item) => item.id === id),
}));
