import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { PrimaryButton } from "../Button";

import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
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

        {status === "authenticated" ? (
          <div className="flex space-x-4">
            <h2>{session.user?.name}</h2>
            <button className="text-red-500" onClick={() => signOut()}>
              Logout
            </button>
          </div>
        ) : (
          <PrimaryButton onClick={() => signIn("google")}>
            Sign In
          </PrimaryButton>
        )}
      </nav>
    </header>
  );
};

export default Header;
