import React from "react";
import { BsCardImage } from "react-icons/bs";

const CommentInput = () => {
  return (
    <div className="flex items-center space-x-3 my-3">
      <div className="rounded-full w-10 h-10 bg-slate-300" />
      <div className="flex-1 flex rounded-lg border bg-slate-100 border-slate-200 px-3 py-2">
        <input
          placeholder="Reply this tweet"
          className="flex-1 bg-transparent focus:outline-none"
        />
        <button className="text-slate-500">
          <BsCardImage />
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
