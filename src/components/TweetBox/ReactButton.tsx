import React from "react";

enum ButtonType {
  LIKE = "LIKE",
  RETWEET = "RETWEET",
  SAVE = "SAVE",
}

interface ReactButtonProps {
  icon: React.ReactNode;
  type: ButtonType;
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const ReactButton = ({ icon, props, type }: ReactButtonProps) => {
  return (
    <button
      {...props}
      className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-orange-400"
    >
      {icon}
      <span className="text-xs">0</span>
    </button>
  );
};

export default ReactButton;
