import Link from "next/link";
import { GiGears, GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const router = useRouter();
  const slug = router.pathname;
  const parentRoute = "/" + slug.split("/")[1];
  const isAdmin = () => (parentRoute === "/admin" ? true : false);
  const [user] = useAuthState(auth);

  return (
    <nav className="flex w-full items-center justify-between bg-black p-4 align-middle">
      <Link href={parentRoute}>
        <h1 className="flex w-fit items-center space-x-3 rounded-lg bg-gray-900/75 p-3 px-5 text-3xl font-bold text-white hover:bg-gray-800/75">
          <GiGears size={28} />
          <span>Spotlight Trivia</span>
        </h1>
      </Link>

      {isAdmin() && user ? (
        <>
          <li className="flex items-center justify-center space-x-7 align-middle text-white">
            <ul className="hidden lg:block">
              <Link href={parentRoute + `/questions`}>
                <h3>Questions</h3>
              </Link>
            </ul>
            <ul className="hidden lg:block">
              <Link href={parentRoute + `/hosts`}>
                <h4>Hosts</h4>
              </Link>
            </ul>
            <ul className="hidden lg:block">
              <Link href={parentRoute + `/team-names`}>
                <h4>Team Names</h4>
              </Link>
            </ul>
            <ul className="hidden lg:block">
              <Link href={parentRoute + `/trivia-games/new`}>
                <h4>Create New Trivia Game</h4>
              </Link>
            </ul>
            <ul className="hidden lg:block">
              <Link prefetch={false} href={parentRoute + `/my-account`}>
                <h4>Account</h4>
              </Link>
            </ul>
          </li>

          <h1 className="flex w-fit items-center space-x-3 rounded-lg bg-gray-900/75 p-3 px-5 text-3xl font-bold text-white hover:bg-gray-800/75 lg:hidden">
            <GiHamburgerMenu size={28} />
          </h1>
        </>
      ) : null}
    </nav>
  );
}
