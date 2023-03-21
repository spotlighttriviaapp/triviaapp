import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import Question from "@/components/Question";

export default function QuestionList({ game, round, questionRefs }) {
  if (questionRefs) {
    const questions = questionRefs.map(useDocumentData);
    console.log("Questions:");
    console.log(questions);
    return questions.map((question, index) => (
      <>
        {question && (
          <Question
            game={game}
            round={round}
            question={question[0]}
            key={toString(index)}
          />
        )}
      </>
    ));
  } else {
    return null;
  }
}
