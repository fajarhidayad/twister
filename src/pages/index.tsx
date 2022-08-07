import TweetBox from "#/components/TweetBox";
import TweetInput from "#/components/TweetInput";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <main className="layout">
      <Head>
        <title>Twister App</title>
      </Head>

      <div className="grid grid-cols-3 gap-8">
        <section className="col-span-2">
          <TweetInput />

          <ul className="mb-4">
            <TweetBox />
            <TweetBox />
          </ul>
        </section>
        <section className="col-span-1">
          <div className="card" />
          <div className="py-3" />
          <div className="card" />
        </section>
      </div>
    </main>
  );
};

export default Home;
