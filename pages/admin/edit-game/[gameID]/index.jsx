import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { db, doc, collection, onSnapshot } from "@/lib/firebase";
import PageWrapper from "@/components/PageWrapper";
import RoundsList from "@/components/RoundsList";

export default function EditGame() {
  // Get the gameID from the query
  const router = useRouter();
  const { gameID } = router.query;
  const gameIDstr = `${gameID}`;

  // Get the game data
  const gameRef = doc(db, "games", gameIDstr);
  const [game] = useDocumentData(gameRef);

  // Get the round data
  const roundsRef = collection(db, "games", gameIDstr, "rounds");
  const [rounds] = useCollectionData(roundsRef);

  return (
    <PageWrapper>
      {game && <GameDetails game={game} />}
      {rounds && <RoundsList game={game} rounds={rounds} />}
    </PageWrapper>
  );
}

function GameDetails({ game }) {
  return (
    game && (
      <>
        <p>id: {game.id}</p>
        <p>name: {game.name}</p>
        <p>type: {game.type}</p>
        <p>style: {game.style}</p>
        <p>date: {game.date.toDate().toDateString()}</p>
        <p>readystatus: {game.readystatus.toString()}</p>
        <br />
      </>
    )
  );
}