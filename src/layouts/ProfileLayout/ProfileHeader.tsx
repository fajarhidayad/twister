import { PrimaryButton } from "#/components/Button";
import { useModalStore } from "#/store";
import { trpc } from "#/utils/trpc";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { CgSpinner } from "react-icons/cg";

interface ProfileHeaderProps {
  id: string;
  name: string;
  followers: number;
  following: number;
  image: string | null;
  isFollowed: boolean;
}

const ProfileHeader = ({
  id,
  followers,
  following,
  isFollowed,
  name,
  image,
}: ProfileHeaderProps) => {
  const { data: session } = useSession();
  const { open: openModal } = useModalStore();

  const utils = trpc.useContext();
  const { mutate: mutateFollow, isLoading } = trpc.useMutation(
    ["user.follow"],
    {
      onSuccess: ({ followingId }) => {
        utils.invalidateQueries(["user.getUserProfile", followingId]);
      },
    }
  );

  const onClickFollow = () => {
    if (!session) openModal();

    mutateFollow(id);
  };

  return (
    <div className="container px-3">
      <section className="card flex flex-col items-center md:flex-row md:items-start ">
        <div className="w-32 h-32 overflow-hidden rounded-full bg-gray-300 md:mr-10">
          {image ? (
            <Image src={image} width={200} height={200} alt="image profile" />
          ) : (
            ""
          )}
        </div>
        <div className="flex-1 py-3 flex flex-col items-center md:flex-row md:items-start">
          <div className="md:w-3/5 md:mr-auto">
            <div className="flex flex-col items-center md:flex-row md:items-baseline mb-5">
              <h1 className="text-2xl font-bold text-slate-900">{name}</h1>
              <div className="flex space-x-5 mt-3 md:mt-0 md:ml-5">
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900 text-base">
                    {following}
                  </span>{" "}
                  Following
                </p>
                <p className="text-sm text-slate-500 mr-auto">
                  <span className="font-bold text-slate-900 text-base">
                    {followers}
                  </span>{" "}
                  Followers
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-center md:text-left mb-5 md:mb-0">
              No description
            </p>
          </div>
          {session?.user?.id !== id && (
            <PrimaryButton onClick={onClickFollow} outlined={isFollowed}>
              {isLoading ? (
                <div className="animate-spin text-blue-500">
                  <CgSpinner />
                </div>
              ) : isFollowed ? (
                "Unfollow"
              ) : (
                "Follow"
              )}
            </PrimaryButton>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfileHeader;
