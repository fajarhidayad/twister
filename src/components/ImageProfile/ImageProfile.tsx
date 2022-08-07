import Image from "next/image";
import React from "react";

interface ImageProfileProps {
  src: string;
}

const ImageProfile: React.FC<ImageProfileProps> = ({ src }) => {
  return (
    <div className="rounded-full w-10 h-10 bg-slate-300 overflow-hidden">
      <Image src={src} width={40} height={40} alt="Profile image" />
    </div>
  );
};

export default ImageProfile;
