import { useRouter } from "next/router";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { db, doc, collection } from "@/lib/firebase";
import PageWrapper from "@/components/PageWrapper";
import QuestionList from "@/components/QuestionList";
export default function EditRound() {
  // Get the gameID and roundID from the query
  const router = useRouter();
  const { gameID, roundID } = router.query;
  const gameIDstr = `${gameID}`;
  const roundIDstr = `${roundID}`;

  // Get the game data
  const gameRef = doc(db, "games", gameIDstr);
  const [game] = useDocumentData(gameRef);

  // Get the round data
  const roundRef = doc(db, "games", gameIDstr, "rounds", roundIDstr);
  const [round] = useDocumentData(roundRef);

  // Get the rounds' questions data (refs)
  const questionsRef = collection(
    db,
    "games",
    gameIDstr,
    "rounds",
    roundIDstr,
    "questions"
  );
  const [questions] = useCollectionData(questionsRef);

  return (
    <PageWrapper>
      {round && (
        <QuestionList game={game} round={round} questions={questions} />
      )}
    </PageWrapper>
  );
}
