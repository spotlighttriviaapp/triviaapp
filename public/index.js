// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";
import { parse } from "papaparse";

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

var myDocument = doc(db, "questions", "documentID?");

var myDocumentBody = {
    question: "What is 1 + 1?",
    answer: "2"
};

var myButtons = document.getElementsByClassName("btn");

function ingest() {
    // Convert csv into json
    const fs = require('fs');
    const myCSV = fs.readFileSync("./triviaQuestionsTest.csv");
    var count = 0;
    parse(myCSV, {
        worker: true,
        step: function(result) {
            // do stuff with the result
            console.log(result);
        },
        complete: function(results, file) {
            console.log('parsing complete read', count, 'records.');
        }
    });

    // setDoc(myDocument, myDocumentBody);
};

for (var i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener('click', ingest, false);
}