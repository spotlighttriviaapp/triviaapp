import PageWrapper from "@/components/PageWrapper";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, getCurrentUser, sendPasswordReset } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { onSnapshot, collection, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function ManageAdminAccount() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  return (
    <PageWrapper>
      <h1 className="m-8 text-lg font-bold">Account Details:</h1>
      <div className="pl-8">
        <h3 className="pb-4">
          <b>Email:</b> {user.email}
        </h3>
        <h3 className="pb-4">
          <b>UID:</b> {user.uid}
        </h3>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => sendPasswordReset(user.email)}
        >
          Reset Password
        </button>
      </div>
    </PageWrapper>
  );
}
