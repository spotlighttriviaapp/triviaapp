import superjson from "superjson";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocsFromServer,
  query,
  limit,
  orderBy,
  startAfter,
  fromMillis,
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
 * Gets games from the games collection
 * @param {number} LIMIT
 */
export async function getGames(lim) {
  // Get a reference to the games collection
  const gamesRef = collection(db, "games");

  // Create a query for the first {lim} number of games.
  const gamesQuery = query(gamesRef, orderBy("date", "desc"), limit(lim));

  // Get the snapshot of all the games from the server and convert to json.
  const gamesSnapshot = await getDocsFromServer(gamesQuery);

  return gamesSnapshot;
}

/**
 * Gets more games from the games collection
 * @param {number} LIMIT
 * @param {documentSnapshot} last
 */
export async function getNextGames(lim, last) {
  // Get a reference to the games collection
  const gamesRef = collection(db, "games");

  // Create a query for the first {lim} number of games.
  const gamesQuery = query(
    gamesRef,
    orderBy("date", "desc"),
    startAfter(last),
    limit(lim)
  );

  // Get the snapshot of all the games from the server and convert to json.
  const gamesSnapshot = await getDocsFromServer(gamesQuery);

  const games = gamesSnapshot.docs.map((game) => {
    return superjson.stringify(game);
  });

  return games;
}
