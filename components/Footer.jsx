import Link from "next/link";
import { useMemo } from "react";

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="fixed bottom-0 w-full bg-white p-4 shadow dark:bg-black md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © {currentYear}{" "}
        <Link href="https://www.spotlightjams.com/" passHref rel="noreferrer">
          Spotlight Entertainment
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="/admin" className="mr-4 hover:underline md:mr-6 ">
            Admin
          </Link>
        </li>
        <li>
          <Link href="/host" className="mr-4 hover:underline md:mr-6 ">
            Host
          </Link>
        </li>
        <li>
          <Link href="/view" className="mr-4 hover:underline md:mr-6 ">
            Viewer
          </Link>
        </li>
        <li>
          <Link href="/play" className="mr-4 hover:underline md:mr-6 ">
            Player
          </Link>
        </li>
      </ul>
    </footer>
  );
}
