import { useRouter } from "next/router";
import React from "react";
import { IoMdHome, IoMdCompass, IoMdBookmark } from "react-icons/io";

interface BottomNavButtonProps {
  children?: React.ReactNode;
  href: string;
}

const BottomNavButton: React.FC<BottomNavButtonProps> = ({
  children,
  href,
}) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <button
      onClick={() => router.push(href)}
      className={`w-3/4 flex flex-col items-center ${
        path === href ? " text-blue-500" : ""
      }`}
    >
      <div className="p-3">{children}</div>
      {path === href ? (
        <div className="self-stretch h-1 bg-blue-500 rounded-t-full mt-2" />
      ) : (
        <div className="mb-3" />
      )}
    </button>
  );
};

const BottomNav = () => {
  return (
    <footer className="sticky md:hidden w-screen bg-white bottom-0 px-3 pt-2 border-t text-gray-500">
      <div className="grid grid-cols-3 gap-3 items-center justify-items-center px-3">
        <BottomNavButton href="/">
          <IoMdHome size={25} />
        </BottomNavButton>
        <BottomNavButton href="/explore">
          <IoMdCompass size={25} />
        </BottomNavButton>
        <BottomNavButton href="/bookmark">
          <IoMdBookmark size={25} />
        </BottomNavButton>
      </div>
    </footer>
  );
};

export default BottomNav;
