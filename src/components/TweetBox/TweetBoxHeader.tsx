import React from "react";
import Link from "next/link";
import ImageProfile from "../ImageProfile";
import { format } from "date-fns";

interface TweetBoxHeaderProps {
  name: string;
  createdAt: Date;
  image: string;
  id: string;
}

const TweetBoxHeader = ({
  name,
  createdAt,
  image,
  id,
}: TweetBoxHeaderProps) => {
  const date = format(createdAt, "dd LLLL 'at' HH':'mm");

  return (
    <div className="flex space-x-3 mb-4">
      <ImageProfile src={image} />
      <div className="flex flex-col justify-between">
        <Link href={`/${id}`}>
          <h1 className="font-bold text-slate-800 hover:underline cursor-pointer">
            {name}
          </h1>
        </Link>
        <p className="text-xs text-slate-400">{date}</p>
      </div>
    </div>
  );
};

export default TweetBoxHeader;
