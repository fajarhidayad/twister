import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { PrimaryButton } from "../Button";
import { FaSortDown } from "react-icons/fa";

import { signOut, useSession } from "next-auth/react";
import { useModalStore } from "#/store";
import ImageProfile from "../ImageProfile";
import ProfilePopOver from "./ProfilePopOver";

const Header = () => {
  const [menuProfile, setMenuProfile] = useState(false);
  const { data: session, status } = useSession();
  const { open: openModal } = useModalStore();

  return (
    <header className="bg-white shadow relative">
      <nav className="container flex justify-between items-center text-slate-600">
        <Link href={"/"}>
          <a className="text-xl font-semibold py-5">Twister</a>
        </Link>

        <ul className="hidden md:flex items-center self-stretch">
          <NavLink text="Home" href="/" />
          <NavLink text="Explore" href="/explore" />
          {session && <NavLink text="Bookmarks" href="/bookmark" />}
        </ul>

        {status === "authenticated" ? (
          <div className="relative">
            <button
              onClick={() => setMenuProfile((prev) => !prev)}
              className="flex items-center space-x-4"
            >
              <ImageProfile src={session.user?.image as string} />
              <h2 className="font-bold text-slate-700">{session.user?.name}</h2>
              <FaSortDown />
            </button>
            <ProfilePopOver
              active={menuProfile}
              activeFn={() => setMenuProfile(false)}
            />
          </div>
        ) : (
          <PrimaryButton onClick={openModal}>Sign In</PrimaryButton>
        )}
      </nav>
    </header>
  );
};

export default Header;
