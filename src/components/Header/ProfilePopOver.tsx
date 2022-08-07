import React from "react";
import { PopOver } from "../Overlay";
import { FaCog, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";

interface ProfilePopOverProps {
  active: boolean;
  activeFn: () => void;
}

const ProfilePopOver: React.FC<ProfilePopOverProps> = ({
  active,
  activeFn,
}) => {
  return (
    <PopOver isActive={active} className="top-16 right-0 text-sm w-[150px]">
      <div className="flex flex-col space-y-2">
        <button className="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-gray-200">
          <FaUserCircle />
          <span>My Profile</span>
        </button>
        <button className="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-gray-200">
          <FaCog />
          <span>Settings</span>
        </button>
        <div className="border-b border-b-slate-200" />
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-gray-200 text-red-500"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </PopOver>
  );
};

export default ProfilePopOver;
