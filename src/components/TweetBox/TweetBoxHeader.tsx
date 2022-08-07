import React from "react";

const TweetBoxHeader = () => {
  return (
    <div className="flex space-x-3 mb-4">
      <div className="rounded-full w-10 h-10 bg-slate-300" />
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-slate-800">Keanu Reeves</h1>
        <p className="text-xs text-slate-400">17 August at 17:00</p>
      </div>
    </div>
  );
};

export default TweetBoxHeader;
