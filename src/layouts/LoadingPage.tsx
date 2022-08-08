import React from "react";
import { useSession } from "next-auth/react";
import { CgSpinner } from "react-icons/cg";

interface LoadingPageProps {
  children: React.ReactNode;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ children }) => {
  const { status } = useSession();

  if (status === "loading")
    return (
      <div className="h-screen w-screen bg-slate-100 flex justify-center items-center">
        <div className="animate-spin text-blue-500">
          <CgSpinner size={40} />
        </div>
      </div>
    );

  return <div className="relative">{children}</div>;
};

export default LoadingPage;
