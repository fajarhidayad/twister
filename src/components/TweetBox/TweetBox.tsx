import React from "react";
import { BsCardImage, BsHeart } from "react-icons/bs";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import TweetBoxHeader from "./TweetBoxHeader";
import TweetBoxReactButton from "./TweetBoxReactButton";

const TweetBox = () => {
  return (
    <li className="card mt-5">
      <TweetBoxHeader />
      <p className="text-slate-700 mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia odio
        deserunt veritatis nesciunt pariatur voluptatem eveniet atque facilis.
        Perferendis totam ducimus fugit. Itaque modi dolorem tenetur. Temporibus
        alias iusto excepturi?
      </p>
      <TweetBoxReactButton />
      <CommentInput />
      <CommentList />
    </li>
  );
};

export default TweetBox;
