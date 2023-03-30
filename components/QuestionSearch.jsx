import { db, collection, query, where, limit, getDocs } from "@/lib/firebase";
import { useState, useEffect } from "react";

import SearchQuestion from "@/components/SearchQuestion";

export default function QuestionSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function searchQuestions() {
      const questionsRef = collection(db, "questions");
      const q = query(
        questionsRef,
        where("testArray", "array-contains", searchTerm),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      const questions = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(questions);
    }

    searchQuestions();
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search questions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Question</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.id}</td>
              <td>{question.Question}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
