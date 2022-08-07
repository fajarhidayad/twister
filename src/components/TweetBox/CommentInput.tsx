import { useSession } from "next-auth/react";
import React from "react";
import { BsCardImage } from "react-icons/bs";
import ImageProfile from "../ImageProfile";

const CommentInput = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center space-x-3 py-3 border-t border-t-slate-300">
      <ImageProfile src={session?.user?.image as string} />
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
