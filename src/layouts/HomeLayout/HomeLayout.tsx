import SideNav from "./SideNav";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { trpc } from "#/utils/trpc";
import { useTweetStore } from "#/store";
import TweetInput from "#/components/TweetInput";
import TweetList from "./TweetList";

const HomeLayout = () => {
  const { data: session } = useSession();
  const {
    data: newTweets,
    isLoading,
    error,
  } = trpc.useQuery(["tweet.getTweetByUserAuth"]);

  const { tweets, saveTweets } = useTweetStore();

  useEffect(() => {
    if (newTweets) {
      saveTweets(newTweets);
    }
  }, [saveTweets, newTweets]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3">
      <section className="md:col-span-2">
        {session && <TweetInput />}
        <TweetList
          tweets={tweets}
          loading={isLoading}
          errorMessage={error ? error.message : ""}
        />
      </section>

      <SideNav />
    </div>
  );
};

export default HomeLayout;
