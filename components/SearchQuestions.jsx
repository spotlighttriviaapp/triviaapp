import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { db, doc, collection, onSnapshot } from "@/lib/firebase";

export default function SearchQuestions() {
  return <p>Search Component</p>;
  const searchString = "example"; // your search string here
  const query = collection("questions")
    .where("Question", ">= ", searchString)
    .where("Question", "<=", searchString + "\uf8ff")
    .orderBy("Question")
    .limit(10)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    });
}
