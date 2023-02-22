import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDocsFromServer,
  getDocFromServer,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Define the Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAu7mDdg8SoY5DXQwcks5Q_le_aw2bEJ48",
  authDomain: "spotlight-trivia-app.firebaseapp.com",
  databaseURL: "https://spotlight-trivia-app-default-rtdb.firebaseio.com",
  projectId: "spotlight-trivia-app",
  storageBucket: "spotlight-trivia-app.appspot.com",
  messagingSenderId: "575723277238",
  appId: "1:575723277238:web:ede0ad04f2c9f11d484f17",
  measurementId: "G-7J30SV35EL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Auth and get a reference to the service
const auth = getAuth(app);

/// Firebase Helper functions

/**
 * Gets all documents from the given collection
 * @param {string} col
 */
export async function getAllDocuments(col) {
  // Get a reference to the specified collection
  const colRef = collection(db, col);
  // Get a snapshot of the documents in the collection
  const docsSnap = await getDocsFromServer(colRef);
  // Return the documents snapshot.
  return docsSnap;
}

/**
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 */
export function gameToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
