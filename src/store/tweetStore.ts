import create from "zustand";
import { inferQueryOutput } from "#/utils/trpc";

export interface LikeTweet {
  userId: string;
  tweetId: string;
}
export type Tweets = inferQueryOutput<"tweet.getAllTweet">;
export type Tweet = inferQueryOutput<"tweet.getTweetById">;

interface TweetState {
  tweets: Tweets;
  saveTweets: (tweets: Tweets) => void;
  tweetById: (id: string) => Tweet | undefined;
}

export const useTweetStore = create<TweetState>()((set, get) => ({
  tweets: [],
  saveTweets: (tweets) => set(() => ({ tweets })),
  tweetById: (id) => get().tweets.find((item) => item.id === id),
}));
