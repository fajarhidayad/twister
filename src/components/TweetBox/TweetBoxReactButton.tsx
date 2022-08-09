import { useModalStore, useTweetStore } from "#/store";
import { trpc } from "#/utils/trpc";
import { useSession } from "next-auth/react";
import React from "react";
import {
  BsChatRight,
  BsHeart,
  BsBookmark,
  BsArrowRepeat,
} from "react-icons/bs";

enum ButtonType {
  LIKE = "LIKE",
  RETWEET = "RETWEET",
  SAVE = "SAVE",
}

interface TweetBoxReactButtonProps {
  tweetId: string;
}

const TweetBoxReactButton = ({ tweetId }: TweetBoxReactButtonProps) => {
  const { data: session } = useSession();
  const { open: openModal } = useModalStore();

  const utils = trpc.useContext();
  const tweet = useTweetStore((state) => state.tweetById(tweetId));

  const likeMutation = trpc.useMutation(["tweet.likeTweet"], {
    onSettled: () => {
      utils.invalidateQueries(["tweet.getAllTweet"]);
    },
  });

  const checkIsNotAuth = async (type: ButtonType) => {
    if (!session) {
      openModal();
      return;
    }

    switch (type) {
      case ButtonType.LIKE:
        likeMutation.mutate(tweetId);
      case ButtonType.RETWEET:
        return;
      case ButtonType.SAVE:
        return;
      default:
        return;
    }
  };

  return (
    <div className="border-t border-t-slate-300 py-1 px-2 flex justify-around items-center space-x">
      <button
        onClick={() => checkIsNotAuth(ButtonType.LIKE)}
        className={`flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-red-400 ${
          tweet && tweet.likes.length === 1 && "text-red-500"
        }`}
      >
        <BsHeart />
        <span className="text-xs">{tweet ? tweet._count.likes : 0}</span>
      </button>
      <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-blue-400">
        <BsChatRight />
        <span className="text-xs">0</span>
      </button>
      <button
        onClick={() => checkIsNotAuth(ButtonType.RETWEET)}
        className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-green-400"
      >
        <BsArrowRepeat />
        <span className="text-xs">0</span>
      </button>
      <button
        onClick={() => checkIsNotAuth(ButtonType.SAVE)}
        className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-orange-400"
      >
        <BsBookmark />
        <span className="text-xs">0</span>
      </button>
    </div>
  );
};

export default TweetBoxReactButton;
