import { useDocumentData } from "react-firebase-hooks/firestore";

export default function CurrentQuestion({
  question = null,
  questionRef = null,
}) {
  // Get the question data, depending on the given props
  var questionData = null;
  if (question != null) {
    [questionData] = useDocumentData(question.questionRef);
  } else if (questionRef != null) {
    [questionData] = useDocumentData(questionRef);
  } else {
    return (
      <>
        <p>No Question Chosen</p>
      </>
    );
  }

  console.log("QuestionData");
  console.log(questionData);

  return (
    questionData && (
      <>
        <p>Currently selected question:</p>
        <p>question: {questionData["Question"]}</p>
        <p>answer: {questionData["correct answer"]}</p>
        <p>last used: {questionData["Last used"]}</p>
        <br />
      </>
    )
  );
}
