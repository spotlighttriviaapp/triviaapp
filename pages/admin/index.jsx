import { useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import PageWrapper from "@/components/PageWrapper";
import GamesList from "@/components/GamesList";

import { onSnapshot, collection, db } from "@/lib/firebase";

export default function Admin(props) {
  // Get all games data
  const gamesRef = collection(db, "games");
  const [games] = useCollectionData(gamesRef);

  return (
    <PageWrapper>
      <h1 className="m-8 pb-24 text-lg font-bold">Admin</h1>
      <GamesList games={games} />
    </PageWrapper>
  );
}
