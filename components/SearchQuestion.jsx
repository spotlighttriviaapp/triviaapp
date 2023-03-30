import { useDocumentData } from "react-firebase-hooks/firestore";
import Button from "@/components/Button";

export default function SearchQuestion({ question }) {
  // Get the question data
  // const [questionData] = useDocumentData(question.questionRef);
  console.log(question);

  return (
    <>
      <p>question: {question["Question"]}</p>
      <p>answer: {question["correct answer"]}</p>
      <Button>Select question</Button>
      <br />
    </>
  );
}
