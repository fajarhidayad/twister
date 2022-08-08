import { Loading } from "#/components/Loader/Loading";
import TweetBox from "#/components/TweetBox";
import TweetInput from "#/components/TweetInput";
import { trpc } from "#/utils/trpc";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const {
    data: tweets,
    isLoading,
    error,
  } = trpc.useQuery(["tweet.getAllTweet"]);

  return (
    <main className="layout">
      <Head>
        <title>Twister App</title>
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3">
        <section className="md:col-span-2">
          {session && <TweetInput />}
          {isLoading && <Loading />}
          {error && <h1 className="text-red-500">{error.message}</h1>}

          <ul className="mb-4">
            {tweets &&
              tweets.map((tweet) => (
                <TweetBox
                  key={tweet.id}
                  createdAt={tweet.createdAt}
                  text={tweet.text}
                  user={{ image: tweet.user.image, name: tweet.user.name }}
                />
              ))}
          </ul>
        </section>
        <aside className="hidden md:block col-span-1">
          <div className="card mb-5">
            <h2 className="font-semibold pb-3 border-b border-b-slate-300 mb-5">
              Trends for you
            </h2>
            <ul className="flex flex-col items-center">
              <li className="text-slate-600">No Trend Yet</li>
            </ul>
          </div>
          <div className="card mb-5">
            <h2 className="font-semibold pb-3 border-b border-b-slate-300 mb-5">
              Recommend follow
            </h2>
            <ul className="flex flex-col items-center">
              <li className="text-slate-600">No People Yet</li>
            </ul>
          </div>
          <div className="text-sm px-3 text-slate-600">
            &copy; {new Date().getFullYear()} Twister App, Fajar Hidayad. Design
            by{" "}
            <a href="http://devchallenges.io" className="hover:underline">
              @devchallenges.io
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Home;
