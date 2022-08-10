import { Loading } from "#/components/Loader/Loading";
import { UserProfile, useUserProfileStore } from "#/store";
import { trpc } from "#/utils/trpc";
import React, { useEffect } from "react";
import TweetList from "../HomeLayout/TweetList";
import ProfileHeader from "./ProfileHeader";

interface ProfileLayoutProps {
  username: string | undefined;
}

const ProfileLayout = ({ username }: ProfileLayoutProps) => {
  const { data, error, isLoading } = trpc.useQuery([
    "user.getUserProfile",
    username ? (username as string) : "",
  ]);
  const { userProfile, setUserProfile } = useUserProfileStore();

  const following = userProfile ? userProfile._count.following : 0;
  const followers = userProfile ? userProfile._count.followedBy : 0;

  useEffect(() => {
    if (!data) return;
    setUserProfile(data);
  }, [data, setUserProfile]);

  return !userProfile ? (
    <Loading />
  ) : (
    <>
      <ProfileHeader
        followers={followers}
        following={following}
        name={userProfile ? (userProfile.name as string) : ""}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3 mt-5">
        <aside className="hidden md:block col-span-1">
          <section className="sticky top-10">
            <div className="card mb-5">
              <h2 className="font-semibold pb-3 border-b border-b-slate-300 mb-5">
                Trends for you
              </h2>
              <ul className="flex flex-col items-center">
                <li className="text-slate-600">No Trend Yet</li>
              </ul>
            </div>
          </section>
        </aside>

        <section className="md:col-span-2">
          {userProfile && userProfile.tweets && (
            <TweetList
              errorMessage={error ? error.message : ""}
              tweets={userProfile.tweets}
              loading={isLoading}
            />
          )}
        </section>
      </div>
    </>
  );
};

export default ProfileLayout;