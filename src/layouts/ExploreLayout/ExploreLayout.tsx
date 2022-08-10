import { useTweetStore } from "#/store";
import { trpc } from "#/utils/trpc";
import React, { useEffect } from "react";
import TweetList from "../HomeLayout/TweetList";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3 mt-5">
        <aside className="hidden md:block col-span-1">
          <section className="sticky top-10">
            <div className="card mb-5">
              <h2 className="font-semibold pb-3 border-b border-b-slate-300 mb-5">
                Trends for you
              </h2>
              <ul className="flex flex-col items-center">
                <li className="text-slate-600">No Trend Yet</li>
              </ul>
            </div>
          </section>
        </aside>

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
