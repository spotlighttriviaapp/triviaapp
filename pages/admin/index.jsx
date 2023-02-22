import Link from "next/link";
import { useEffect, useState } from "react";
import superjson from "superjson";

import PageWrapper from "@/components/PageWrapper";
import GamesFeed from "@/components/GamesFeed";
import Loader from "@/components/Loader";
import { getGames, getNextGames } from "@/lib/firebase";

// Max games to query per page
const LIMIT = 1;

export async function getServerSideProps(context) {
  const gamesSnapshot = await getGames(LIMIT);
  const games = gamesSnapshot.docs.map((game) => {
    return superjson.stringify(game);
  });

  return {
    props: { games, gamesSnapshot }, // will be passed to the page component as props
  };
}

export default function Admin(props) {
  const [games, setGames] = useState(props.games);
  const [loading, setLoading] = useState(false);
  const [gamesEnd, setGamesEnd] = useState(false);

  const getMoreGames = async () => {
    setLoading(true);
    const last = games[games.length - 1];

    const newGames = await getNextGames(LIMIT, last);

    setGames(games.concat(newGames));
    setLoading(false);

    if (newGames.length < LIMIT) {
      setGamesEnd(true);
    }
  };

  return (
    <PageWrapper>
      <h1 className="m-8 pb-24 text-lg font-bold">Admin</h1>
      <GamesFeed games={games} />
      {!loading && !gamesEnd && (
        <button onClick={getMoreGames}>Load more</button>
      )}
      <Loader show={loading} />
      {gamesEnd && "No more games to show!"}
    </PageWrapper>
  );
}
