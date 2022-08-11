import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import ProfileLayout from "#/layouts/ProfileLayout";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <main className="layout">
      <ProfileLayout userId={userId as string} />
    </main>
  );
};

export default ProfilePage;
