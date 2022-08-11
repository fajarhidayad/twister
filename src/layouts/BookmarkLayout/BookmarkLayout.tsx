import { Loading } from "#/components/Loader/Loading";
import SideNav from "#/components/SideNav";
import ButtonSideNav from "#/components/SideNav/ButtonSideNav";
import TweetBox from "#/components/TweetBox";
import { trpc } from "#/utils/trpc";
import React from "react";

const BookmarkLayout = () => {
  const {
    data: bookmarks,
    isLoading,
    error,
  } = trpc.useQuery(["tweet.getTweetBookmark"]);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 md:gap-8 px-3 mt-5">
      <SideNav>
        <ButtonSideNav text="Tweets" active />
        <ButtonSideNav text="Tweets & replies" />
        <ButtonSideNav text="Media" />
        <ButtonSideNav text="Likes" />
      </SideNav>

      <section className="md:col-span-2">
        {bookmarks && bookmarks.length > 0 ? (
          <ul className="mb-4">
            {isLoading && <Loading />}
            {error && <h1 className="text-red-500">{error.message}</h1>}
            {bookmarks &&
              bookmarks.map((bookmark) => (
                <TweetBox
                  key={bookmark.id}
                  id={bookmark.tweetId}
                  createdAt={bookmark.createdAt}
                  text={bookmark.tweet.text}
                  count={bookmark.tweet._count}
                  likes={bookmark.tweet.likes}
                  user={{
                    image: bookmark.user.image,
                    name: bookmark.user.name,
                    id: bookmark.user.id,
                  }}
                />
              ))}
          </ul>
        ) : (
          <h1 className="text-2xl text-slate-700 font-semibold text-center">
            No saved tweets
          </h1>
        )}
      </section>
    </div>
  );
};

export default BookmarkLayout;
