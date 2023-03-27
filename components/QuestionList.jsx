import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import Question from "@/components/Question";
import { useState, useEffect } from "react";

export default function QuestionList({ game, round, questions }) {
  if (questions) {
    return questions.map((question) => (
      <Question
        game={game}
        round={round}
        question={question}
        key={question.id}
      />
    ));
  } else {
    return null;
  }
}
