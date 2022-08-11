import React, { useRef } from "react";
import { PopOver } from "../Overlay";
import { IoEarth, IoPeople } from "react-icons/io5";
import useClickOutside from "#/hooks/useClickOutside";

interface TweetInputPopOverProps {
  active: boolean;
  setPublic: () => void;
  setPrivate: () => void;
  close: () => void;
}

const TweetInputPopOver: React.FC<TweetInputPopOverProps> = ({
  active,
  setPublic,
  setPrivate,
  close,
}) => {
  const menuRef = useRef(null);
  useClickOutside(menuRef, close);

  return (
    <PopOver menuRef={menuRef} isActive={active} className="top-14 left-4">
      <div className="text-xs text-slate-800 w-[190px]">
        <h3 className="font-bold mb-1">Who can reply</h3>
        <p className="text-slate-600">Choose who can reply to this tweet</p>
        <button
          onClick={setPublic}
          className="p-2 flex space-x-2 items-center hover:bg-gray-200 rounded-lg w-full font-semibold mt-2 transition-colors duration-200 ease-out"
        >
          <IoEarth size={20} />
          <span>Everyone</span>
        </button>
        <button
          onClick={setPrivate}
          className="p-2 flex space-x-2 items-center hover:bg-gray-200 rounded-lg w-full font-semibold mt-2 transition-colors duration-200 ease-out"
        >
          <IoPeople size={20} />
          <span>People you follow</span>
        </button>
      </div>
    </PopOver>
  );
};

export default TweetInputPopOver;
