import Link from "next/link";
import { useEffect, useState } from "react";

import PageWrapper from "@/components/PageWrapper";
import TriviaGames from "@/components/TriviaGames";
import { getAllDocuments } from "@/lib/firebase";

// This method tells what data we need from the server before the page is rendered.
// The server gets the data, compiles it and then gives it to the components before it is rendered.
// This is Server Side Rendering.
export async function getServerSideProps() {
  const games = await getAllDocuments("games");

  return {
    props: { games }, // will be passed to the page component as props
  };
}

export default function Admin({ games }) {
  return (
    <PageWrapper>
      <h1 className="m-8 pb-24 text-lg font-bold">Admin</h1>
      <TriviaGames games={games} />
    </PageWrapper>
  );
}
