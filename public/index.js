// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc } from "firebase/firestore";
import { allQuestions } from 'triviaQuestions.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu7mDdg8SoY5DXQwcks5Q_le_aw2bEJ48",
    authDomain: "spotlight-trivia-app.firebaseapp.com",
    projectId: "spotlight-trivia-app",
    storageBucket: "spotlight-trivia-app.appspot.com",
    messagingSenderId: "575723277238",
    appId: "1:575723277238:web:ede0ad04f2c9f11d484f17",
    measurementId: "G-7J30SV35EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

console.log('Hello World! (index.js)');

for (var i = 0; i < allQuestions.length; i++) {
    console.log(allQuestions[i]);
};

// const docRef = await addDoc(collection(db, "questions"), {
//     question: "What is 1 + 1?",
//     answer: "2"
// });

// console.log("Document written with ID: ", docRef.id);