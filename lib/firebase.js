import { initializeApp } from "firebase/app";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  getDocsFromServer,
  limit,
  orderBy,
  startAfter,
  fromMillis,
  onSnapshot,
} from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

export { onSnapshot, collection } from "firebase/firestore";

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
const provider = new GoogleAuthProvider();

// provider.setCustomParameters({ prompt: "select_account" });

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getCurrentUser = async () => {
  const uid = auth.currentUser.uid;
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const docs = await getDocs(q);
  return docs.docs[0];
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  provider,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  getCurrentUser,
  logout,
};
