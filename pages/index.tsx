import HomeLayout from "#/layouts/HomeLayout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <main className="layout">
      <Head>
        <title>Twister App</title>
      </Head>
      <HomeLayout />
    </main>
  );
};

export default Home;
