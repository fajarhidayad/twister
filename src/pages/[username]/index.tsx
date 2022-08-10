import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import ProfileLayout from "#/layouts/ProfileLayout";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <main className="layout">
      <Head>
        <title>{username} | Twister App</title>
      </Head>

      <ProfileLayout username={username as string} />
    </main>
  );
};

export default ProfilePage;
