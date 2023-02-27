import Link from "next/link";

import PageWrapper from "@/components/PageWrapper";
import GamesFeed from "@/components/GamesFeed";
import Loader from "@/components/Loader";

import React, { useEffect, useState } from "react";

import {
  auth,
  getGames,
  getNextGames,
  onSnapshot,
  collection,
  db,
  signInWithEmailAndPassword,
  signInWithGoogle,
  logInWithEmailAndPassword,
  logout,
} from "@/lib/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

export default function Admin(props) {
  const [games, setGames] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "games"), (snapshot) =>
        setGames(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);

  return (
    <PageWrapper>
      {!user ? (
        <>
          <div className="pl-8">
            <h1 className="my-4 text-lg font-bold">Sign In:</h1>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
              className="my-4 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="my-4 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            />
            <br />
            <button
              onClick={() => logInWithEmailAndPassword(email, password)}
              className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log In
            </button>
            {/* <button onClick={signInWithGoogle}>Login with Google</button> */}
          </div>
        </>
      ) : (
        <div className="pl-8">
          <button
            onClick={() => logout()}
            className="my-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
          <br />
          <GamesFeed games={games} key="gamesfeed" />
        </div>
      )}
    </PageWrapper>
  );
}
