import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  const { pathname } = useRouter();

  const active = pathname === href;

  return (
    <li
      className={`transition-all duration-200 ease-out w-24 flex items-center justify-center h-full text-center text border-y-[3px] border-y-transparent font-semibold mx-5 hover:text-blue-500 hover:border-b-blue-500 ${
        active && "text-blue-500 border-b-blue-500"
      }`}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default NavLink;
