import { useSession } from "next-auth/react";
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import TweetBoxHeader from "./TweetBoxHeader";
import TweetBoxReactButton from "./TweetBoxReactButton";

const TweetBox = () => {
  const { data: session } = useSession();
  return (
    <li className="card mb-5">
      <TweetBoxHeader />
      <p className="text-slate-700 mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia odio
        deserunt veritatis nesciunt pariatur voluptatem eveniet atque facilis.
        Perferendis totam ducimus fugit. Itaque modi dolorem tenetur. Temporibus
        alias iusto excepturi?
      </p>
      <TweetBoxReactButton />
      {session && <CommentInput />}
      <Comment />
    </li>
  );
};

export default TweetBox;
