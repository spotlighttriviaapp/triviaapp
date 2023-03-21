import Link from "next/link";
import Button from "@/components/Button";

export default function Question({ game, round, question, key }) {
  console.log("Question:");
  console.log(question);
  console.log("key:");
  console.log(key);
  return (
    question && (
      <>
        <p>question: {question["Question"]}</p>
        <p>answer: {question["correct answer"]}</p>
        <p>key: {key}</p>
        <Link
          href={{
            pathname: "/admin/edit-game/[gameID]/[roundID]/[questionID]",
            query: { gameID: game.id, roundID: round.id, questionID: key },
          }}
        >
          Edit
        </Link>
        <br />
      </>
    )
  );
}
