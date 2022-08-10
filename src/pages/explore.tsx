import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import ExploreLayout from "#/layouts/ExploreLayout";

const ExplorePage: NextPage = () => {
  return (
    <main className="layout">
      <Head>
        <title>Explore | Twister App</title>
      </Head>

      <ExploreLayout />
    </main>
  );
};

export default ExplorePage;
