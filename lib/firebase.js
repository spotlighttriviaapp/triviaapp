import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
