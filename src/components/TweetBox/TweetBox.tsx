import { useSession } from "next-auth/react";
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import TweetBoxHeader from "./TweetBoxHeader";
import TweetBoxReactButton from "./TweetBoxReactButton";

interface User {
  name: string | null;
  image: string | null;
}

interface TweetBoxProps {
  text: string;
  createdAt: Date;
  user: User;
}

const TweetBox = ({ text, createdAt, user }: TweetBoxProps) => {
  const { data: session } = useSession();
  return (
    <li className="card mb-5">
      <TweetBoxHeader
        createdAt={createdAt}
        name={user.name as string}
        image={user.image as string}
      />
      <p className="text-slate-700 mb-4">{text}</p>
      <TweetBoxReactButton />
      {session && <CommentInput />}
      <Comment />
    </li>
  );
};

export default TweetBox;
