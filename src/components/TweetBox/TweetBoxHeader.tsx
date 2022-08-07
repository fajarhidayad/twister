import React from "react";
import Link from "next/link";

const TweetBoxHeader = () => {
  return (
    <div className="flex space-x-3 mb-4">
      <div className="rounded-full w-10 h-10 bg-slate-300" />
      <div className="flex flex-col justify-between">
        <Link href={"/"}>
          <h1 className="font-bold text-slate-800 hover:underline cursor-pointer">
            Keanu Reeves
          </h1>
        </Link>
        <p className="text-xs text-slate-400">17 August at 17:00</p>
      </div>
    </div>
  );
};

export default TweetBoxHeader;
