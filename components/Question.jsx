import Link from "next/link";
import { db, doc } from "@/lib/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

export default function Question({ game, round, question }) {
  // Get the question data
  const [questionData] = useDocumentData(question.questionRef);

  return (
    questionData && (
      <>
        <p>key: {question.id}</p>
        <p>question: {questionData["Question"]}</p>
        <p>answer: {questionData["correct answer"]}</p>
        <Link
          href={{
            pathname: "/admin/edit-game/[gameID]/[roundID]/[questionID]",
            query: {
              gameID: game.id,
              roundID: round.id,
              questionID: question.id,
            },
          }}
        >
          Edit
        </Link>
        <br />
      </>
    )
  );
}
