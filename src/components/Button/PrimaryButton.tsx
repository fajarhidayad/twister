import React from "react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string | number;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <button
      {...props}
      className="px-5 py-2 bg-blue-500 text-white rounded-md active:bg-blue-700 hover:bg-blue-600 transition-all duration-200 ease-out disabled:bg-blue-400"
    >
      {props.children}
    </button>
  );
};
