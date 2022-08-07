import TweetBox from "#/components/TweetBox";
import TweetInput from "#/components/TweetInput";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <main className="layout">
      <Head>
        <title>Twister App</title>
      </Head>

      <div className="grid grid-cols-3 gap-8">
        <section className="col-span-2">
          {session && <TweetInput />}

          <ul className="mb-4">
            <TweetBox />
            <TweetBox />
          </ul>
        </section>
        <aside className="col-span-1">
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
        </aside>
      </div>
    </main>
  );
};

export default Home;
