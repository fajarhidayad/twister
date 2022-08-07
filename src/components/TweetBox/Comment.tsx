import Link from "next/link";
import React from "react";
import { BsHeart } from "react-icons/bs";

const CommentBox = () => {
  return (
    <li className="flex space-x-3">
      <div className="rounded-full w-10 h-10 bg-slate-300" />

      <div>
        <div className="flex-1 bg-slate-100 rounded-lg py-2 px-3">
          <div className="flex items-baseline space-x-3 mb-1">
            <Link href="/">
              <a className="font-bold text-slate-800 hover:underline">
                Keanu Reeves
              </a>
            </Link>
            <p className="text-xs text-slate-400">17 August at 17:00</p>
          </div>
          <p className="text-slate-700 mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            atque.
          </p>
        </div>

        <div className="text-xs text-slate-500 mt-1 flex space-x-2">
          <button className="flex items-center space-x-1 hover:text-red-400">
            <BsHeart />
            <span>Like</span>
          </button>{" "}
          <p>1 Like</p>
        </div>
      </div>
    </li>
  );
};

const Comment = () => {
  return (
    <ul className="border-t border-t-slate-300 py-3">
      <CommentBox />
    </ul>
  );
};

export default Comment;
