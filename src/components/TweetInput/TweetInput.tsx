import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import { IoEarth, IoPeople } from "react-icons/io5";
import { PrimaryButton } from "../Button";
import TweetInputPopOver from "./TweetInputPopOver";

interface PublicTweetProps {
  public: boolean;
  title: "Everyone" | "People you follow";
}

const TweetInput = () => {
  const [popOver, setPopOver] = useState(false);
  const [publicTweet, setPublicTweet] = useState<PublicTweetProps>({
    public: true,
    title: "Everyone",
  });

  return (
    <section className="card">
      <h2 className="font-bold text-slate-800">Tweet goes here!</h2>
      <div className="border-b border-b-slate-200 my-3" />
      <div className="flex space-x-4">
        <div className="rounded-full w-10 h-10 bg-slate-300" />
        <div className="flex-1 flex flex-col">
          <textarea
            placeholder="Write something here..."
            className="focus:outline-none py-2"
            maxLength={255}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-3 text-blue-500 relative">
              <button>
                <BsImage />
              </button>
              <button
                onClick={() => setPopOver((prev) => !prev)}
                className="flex items-center"
              >
                {publicTweet.public ? <IoEarth /> : <IoPeople />}
                <span className="text-xs ml-1">
                  {publicTweet.title} can reply
                </span>
              </button>
              <TweetInputPopOver
                active={popOver}
                setPublic={() => {
                  setPublicTweet({ public: true, title: "Everyone" });
                  setPopOver(false);
                }}
                setPrivate={() => {
                  setPublicTweet({ public: false, title: "People you follow" });
                  setPopOver(false);
                }}
              />
            </div>
            <PrimaryButton>Tweet</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TweetInput;
