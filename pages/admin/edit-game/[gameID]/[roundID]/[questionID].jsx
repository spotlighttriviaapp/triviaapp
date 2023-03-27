import { useRouter } from "next/router";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { db, doc, collection, onSnapshot } from "@/lib/firebase";
import PageWrapper from "@/components/PageWrapper";
import CurrentQuestion from "@/components/CurrentQuestion";
import SearchQuestions from "@/components/SearchQuestions";

export default function pickQuestion() {
  // Get the gameID, roundID, and questionID from the query
  const router = useRouter();
  const { gameID, roundID, questionID } = router.query;
  const gameIDstr = `${gameID}`;
  const roundIDstr = `${roundID}`;
  const questionIDstr = `${questionID}`;

  // Get the game data
  const gameRef = doc(db, "games", gameIDstr);
  const [game] = useDocumentData(gameRef);

  // Get the round data
  const roundRef = doc(db, "games", gameIDstr, "rounds", roundIDstr);
  const [round] = useDocumentData(roundRef);

  // Get the question ref data
  const questionRef = doc(
    db,
    "games",
    gameIDstr,
    "rounds",
    roundIDstr,
    "questions",
    questionIDstr
  );
  const [question] = useDocumentData(questionRef);

  return (
    <PageWrapper>
      <>
        {game && <p>gameID: {game.id}</p>}
        {round && <p>roundID: {round.id}</p>}
        {question && <p>questionID: {question.id}</p>}
        <br />
        {question && (
          <CurrentQuestion
            game={game}
            round={round}
            question={question}
            key={question.id}
          />
        )}
        <SearchQuestions />
      </>
    </PageWrapper>
  );
}
