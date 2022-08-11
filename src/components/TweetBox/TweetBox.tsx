import { useSession } from "next-auth/react";
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import TweetBoxHeader from "./TweetBoxHeader";
import TweetBoxReactButton from "./TweetBoxReactButton";
import { Prisma } from "@prisma/client";

interface User {
  id: string | null;
  name: string | null;
  image: string | null;
}

interface Likes {
  userId: string;
  tweetId: string;
}

interface TweetBoxProps {
  id: string;
  text: string;
  createdAt: Date;
  user: User;
  likes: Likes[];
  count: Prisma.TweetCountOutputType;
}

const TweetBox = ({
  text,
  createdAt,
  user,
  id,
  count,
  likes,
}: TweetBoxProps) => {
  const { data: session } = useSession();
  return (
    <li className="card mb-5">
      <TweetBoxHeader
        createdAt={createdAt}
        name={user.name as string}
        image={user.image as string}
        id={user.id as string}
      />
      <p className="text-slate-700 mb-4">{text}</p>
      <TweetBoxReactButton
        tweetId={id}
        isLikedByUser={likes.length === 1}
        bookmarkCount={count.bookmarks}
        commentCount={count.comments}
        likesCount={count.likes}
      />
      {session && <CommentInput />}
      {/* <Comment /> */}
    </li>
  );
};

export default TweetBox;
