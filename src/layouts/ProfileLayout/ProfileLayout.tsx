import { Loading } from "#/components/Loader/Loading";
import { useUserProfileStore } from "#/store";
import { trpc } from "#/utils/trpc";
import React, { useEffect } from "react";
import TweetList from "../HomeLayout/TweetList";
import ProfileHeader from "./ProfileHeader";
import SideNav from "#/components/SideNav";
import ButtonSideNav from "#/components/SideNav/ButtonSideNav";
import Head from "next/head";

interface ProfileLayoutProps {
  userId: string | undefined;
}

const ProfileLayout = ({ userId }: ProfileLayoutProps) => {
  const { data, error, isLoading } = trpc.useQuery([
    "user.getUserProfile",
    userId ? (userId as string) : "",
  ]);
  const { userProfile, setUserProfile } = useUserProfileStore();

  const following = userProfile ? userProfile._count.following : 0;
  const followers = userProfile ? userProfile._count.followedBy : 0;

  useEffect(() => {
    if (!data) return;
    setUserProfile(data);
  }, [data, setUserProfile]);

  if (isLoading) {
    return <Loading />;
  }

  return userProfile ? (
    <>
      <Head>
        <title>{userProfile.name} | Twister App</title>
      </Head>
      <ProfileHeader
        id={userProfile.id}
        followers={followers}
        following={following}
        isFollowed={userProfile.followedBy.length > 0}
        image={userProfile.image}
        name={userProfile ? (userProfile.name as string) : ""}
      />
      <div className="container grid grid-cols-1 md:grid-cols-3 md:gap-8 px-3 mt-5">
        <SideNav>
          <ButtonSideNav text="Tweets" active />
          <ButtonSideNav text="Tweets & replies" />
          <ButtonSideNav text="Media" />
          <ButtonSideNav text="Likes" />
        </SideNav>

        <section className="md:col-span-2">
          {userProfile && userProfile.tweets.length > 0 ? (
            <TweetList
              errorMessage={error ? error.message : ""}
              tweets={userProfile.tweets}
              loading={isLoading}
            />
          ) : (
            <h1 className="text-center text-2xl text-slate-700 font-semibold">
              No tweet posted
            </h1>
          )}
        </section>
      </div>
    </>
  ) : (
    <h1 className="text-2xl text-center font-semibold text-slate-700">
      Sorry user not found
    </h1>
  );
};

export default ProfileLayout;
