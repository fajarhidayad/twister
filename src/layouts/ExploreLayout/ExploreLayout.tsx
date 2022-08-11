import { useTweetStore } from "#/store";
import { trpc } from "#/utils/trpc";
import React, { useEffect } from "react";
import SideNav from "#/components/SideNav";
import TweetList from "../HomeLayout/TweetList";
import ButtonSideNav from "#/components/SideNav/ButtonSideNav";

const ExploreLayout = () => {
  const { data, isLoading, error } = trpc.useQuery(["tweet.getAllTweet"]);
  const { tweets, saveTweets } = useTweetStore();

  useEffect(() => {
    if (data) {
      saveTweets(data);
    }
  }, [data, saveTweets]);

  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-3 md:gap-8 px-3 mt-5">
        <SideNav>
          <ButtonSideNav text="Top" active />
          <ButtonSideNav text="Latest" />
          <ButtonSideNav text="People" />
          <ButtonSideNav text="Media" />
        </SideNav>

        <section className="md:col-span-2">
          {tweets && (
            <TweetList
              errorMessage={error ? error.message : ""}
              tweets={tweets}
              loading={isLoading}
            />
          )}
        </section>
      </div>
    </>
  );
};

export default ExploreLayout;
