import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Admin() {
  // --------------------------------------------

  // Example for generating a random number
  // and navigating to a page with that number
  // as a parameter. The useEffect is used to
  // generate the random number only once and
  // allow for hydration of the page.
  const [triviaID, setTriviaID] = useState("");

  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  useEffect(() => {
    setTriviaID(generateRandomInteger(1000000000).toString());
  }, []);

  // --------------------------------------------

  return (
    <PageWrapper>
      <h1 className="m-8 pb-24 text-lg font-bold">Portal: Admin /</h1>
      <Link href={`/admin/trivia-games/view/${triviaID}`} className="underline">
        {triviaID}
      </Link>
    </PageWrapper>
  );
}
