import { PrimaryButton } from "#/components/Button";
import React from "react";

interface ProfileHeaderProps {
  name: string;
  followers: number;
  following: number;
}

const ProfileHeader = ({ followers, following, name }: ProfileHeaderProps) => {
  return (
    <>
      <section className="card flex flex-col items-center md:flex-row md:items-start mx-3">
        <div className="w-32 h-32 overflow-hidden rounded-full bg-gray-300 md:mr-10"></div>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              laborum nesciunt libero ipsum qui vitae sequi expedita! Eveniet
              nesciunt, amet quas animi provident omnis? Fugit error deserunt
              sapiente quae qui.
            </p>
          </div>
          <PrimaryButton>Follow</PrimaryButton>
        </div>
      </section>
    </>
  );
};

export default ProfileHeader;
