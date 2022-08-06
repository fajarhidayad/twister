import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { PrimaryButton } from "../Button";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container flex justify-between items-center text-slate-600">
        <Link href={"/"}>
          <a className="text-xl font-semibold py-5">Twister</a>
        </Link>

        <ul className="hidden md:flex items-center self-stretch">
          <NavLink text="Home" href="/" />
          <NavLink text="Explore" href="/explore" />
          <NavLink text="Bookmarks" href="/bookmark" />
        </ul>

        <PrimaryButton>Sign In</PrimaryButton>
      </nav>
    </header>
  );
};

export default Header;
