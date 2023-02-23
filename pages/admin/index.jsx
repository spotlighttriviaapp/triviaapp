import Link from "next/link";
import { useEffect, useState } from "react";
import superjson from "superjson";

import PageWrapper from "../../components/PageWrapper";
import GamesFeed from "@/components/GamesFeed";
import Loader from "@/components/Loader";
import {
  getGames,
  getNextGames,
  onSnapshot,
  collection,
  db,
} from "@/lib/firebase";

export default function Admin(props) {
  const [games, setGames] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "games"), (snapshot) =>
        setGames(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <PageWrapper>
      <h1 className="m-8 pb-24 text-lg font-bold">Admin</h1>
      <GamesFeed games={games} key="gamesfeed" />
    </PageWrapper>
  );
}
