import Link from "next/link";
import Button from "@/components/Button";

export default function Question({ game, round, question }) {
  console.log("Question:");
  console.log(question);
  return (
    question && (
      <>
        <p>question: {question["Question"]}</p>
        <p>answer: {question["correct answer"]}</p>
        <div>Edit</div>
        <br />
      </>
    )
  );
}
