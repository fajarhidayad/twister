import { useTweetStore } from "#/store";
import { trpc } from "#/utils/trpc";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import { IoEarth, IoPeople } from "react-icons/io5";
import { PrimaryButton } from "../Button";
import ImageProfile from "../ImageProfile";
import TweetInputPopOver from "./TweetInputPopOver";

interface PublicTweetProps {
  public: boolean;
  title: "Everyone" | "People you follow";
}

const TweetInput = () => {
  const { data: session } = useSession();
  const utils = trpc.useContext();
  const tweetMutation = trpc.useMutation(["tweet.addTweet"], {
    onSuccess() {
      utils.invalidateQueries(["tweet.getAllTweet"]);
    },
  });

  const [text, setText] = useState("");
  const [popOver, setPopOver] = useState(false);
  const [publicTweet, setPublicTweet] = useState<PublicTweetProps>({
    public: true,
    title: "Everyone",
  });

  const submitTweet = async () => {
    if (!text) return;
    tweetMutation.mutate({
      text,
    });
    setText("");
  };

  return (
    <section className="card mb-5">
      <h2 className="font-bold text-slate-800">Tweet goes here!</h2>
      <div className="border-b border-b-slate-200 my-3" />
      <div className="flex space-x-4">
        <ImageProfile src={session?.user?.image as string} />
        <div className="flex-1 flex flex-col">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
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
                close={() => setPopOver(false)}
              />
            </div>
            <PrimaryButton disabled={text.length < 1} onClick={submitTweet}>
              Tweet
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TweetInput;
