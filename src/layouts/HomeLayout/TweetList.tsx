import TweetBox from "#/components/TweetBox";
import React from "react";
import { Tweets } from "#/store";
import { Loading } from "#/components/Loader/Loading";

interface TweetListProps {
  tweets: Tweets;
  loading: boolean;
  errorMessage: string;
}

const TweetList = ({ errorMessage, loading, tweets }: TweetListProps) => {
  return (
    <ul className="mb-4">
      {loading && <Loading />}
      {errorMessage && <h1 className="text-red-500">{errorMessage}</h1>}
      {tweets &&
        tweets.map((tweet) => (
          <TweetBox
            key={tweet.id}
            id={tweet.id}
            createdAt={tweet.createdAt}
            text={tweet.text}
            count={tweet._count}
            likes={tweet.likes}
            user={{
              image: tweet.user.image,
              name: tweet.user.name,
              id: tweet.user.id,
            }}
          />
        ))}
    </ul>
  );
};

export default TweetList;
