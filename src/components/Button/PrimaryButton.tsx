import React from "react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string | number;
  outlined?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`px-5 py-2 rounded-md transition-all duration-200 ease-out ${
        props.outlined
          ? "bg-white border border-blue-500 text-blue-500 hover:bg-blue-200 active:bg-blue-300"
          : "bg-blue-500 text-white active:bg-blue-700 hover:bg-blue-600 disabled:bg-blue-400"
      }`}
    >
      {props.children}
    </button>
  );
};
