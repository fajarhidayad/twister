import { useModalStore } from "#/store";
import { useSession } from "next-auth/react";
import React from "react";
import {
  BsChatRight,
  BsHeart,
  BsBookmark,
  BsArrowRepeat,
} from "react-icons/bs";

const TweetBoxReactButton = () => {
  const { data: session } = useSession();
  const { open: openModal } = useModalStore();

  const checkIsNotAuth = () => {
    if (!session) {
      openModal();
    }
  };

  return (
    <div className="border-t border-t-slate-300 py-1 px-2 flex justify-around items-center space-x">
      <button
        onClick={checkIsNotAuth}
        className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-red-400"
      >
        <BsHeart />
        <span className="text-xs">0</span>
      </button>
      <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-blue-400">
        <BsChatRight />
        <span className="text-xs">0</span>
      </button>
      <button
        onClick={checkIsNotAuth}
        className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-green-400"
      >
        <BsArrowRepeat />
        <span className="text-xs">0</span>
      </button>
      <button
        onClick={checkIsNotAuth}
        className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-orange-400"
      >
        <BsBookmark />
        <span className="text-xs">0</span>
      </button>
    </div>
  );
};

export default TweetBoxReactButton;
