import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocFromServer,
  getDocsFromServer,
  query,
  limit,
  orderBy,
  startAfter,
  fromMillis,
  toMillis,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocFromServer,
  getDocsFromServer,
  query,
  limit,
  orderBy,
  startAfter,
  fromMillis,
  toMillis,
  onSnapshot,
} from "firebase/firestore";

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
export const db = getFirestore(app);

// Initialize Auth and get a reference to the service
const auth = getAuth(app);
