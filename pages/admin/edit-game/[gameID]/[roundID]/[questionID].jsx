import { useRouter } from "next/router";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { db, doc, collection, onSnapshot } from "@/lib/firebase";
import PageWrapper from "@/components/PageWrapper";
import QuestionList from "@/components/QuestionList";
export default function pickQuestion() {
  // Get the gameID and roundID from the query
  const router = useRouter();
  const { gameID, roundID, questionID } = router.query;
  const gameIDstr = `${gameID}`;
  const roundIDstr = `${roundID}`;
  const questionIDStr = questionID;

  // Get the game data
  const gameRef = doc(db, "games", gameIDstr);
  const [game] = useDocumentData(gameRef);

  // Get the round data
  const roundRef = doc(db, "games", gameIDstr, "rounds", roundIDstr);
  const [round] = useDocumentData(roundRef);

  // Get the question data
  const questionRef = doc(db, "questions");

  return (
    <PageWrapper>
      {question && (
        <>
          <p>game: {game.id}</p>
          <p>round: {round.id}</p>f
        </>
      )}
    </PageWrapper>
  );
}
