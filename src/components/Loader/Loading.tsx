import React from "react";
import { CgSpinner } from "react-icons/cg";

export const Loading = () => {
  return (
    <section className="container flex justify-center mt-5">
      <div className="animate-spin text-blue-500">
        <CgSpinner size={40} />
      </div>
    </section>
  );
};
