// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc } from "firebase/firestore";

const allQuestions = [
    {
      "Category": "Q&A",
      "Sub Category": "Fashion",
      "Question": "What fabric was most popular for 1970's leisure suits?",
      "answer A": "",
      "Answer B": "",
      "Answer C": "",
      "Answer D": "",
      "correct answer": "Polyester",
      "Difficulty": 1,
      "Last used": "12/26/2019",
      "Frequency": 2,
      "Reg  or TT": "Reg"
    },
    {
      "Category": "Q&A",
      "Sub Category": "definitions",
      "Question": "This double-b word means to mend boots or to put something together clumsily?",
      "answer A": "",
      "Answer B": "",
      "Answer C": "",
      "Answer D": "",
      "correct answer": "cobble",
      "Difficulty": 1,
      "Last used": "12/29/2019",
      "Frequency": 1,
      "Reg  or TT": "Reg"
    },
    {
      "Category": "Q&A",
      "Sub Category": "Fashion",
      "Question": "A classic of men’s formal wear, this dinner jacket was named for a New York country club that opened in 1886?",
      "answer A": "",
      "Answer B": "",
      "Answer C": "",
      "Answer D": "",
      "correct answer": "tuxedo",
      "Difficulty": 1,
      "Last used": "12/29/2019",
      "Frequency": 1,
      "Reg  or TT": "Reg"
    },
    {
      "Category": "Q&A",
      "Sub Category": "Mythology",
      "Question": "Who was Apollos twin sister",
      "answer A": "",
      "Answer B": "",
      "Answer C": "",
      "Answer D": "",
      "correct answer": "Artemis",
      "Difficulty": 2,
      "Last used": "12/30/2019",
      "Frequency": 3,
      "Reg  or TT": "Reg"
    },
    {
      "Category": "Q&A",
      "Sub Category": "St. Patrick's Day",
      "Question": "Before green, there was another color previously associated with the celebration of St. Patrick's Day. Which Primary color was this?",
      "answer A": "",
      "Answer B": "",
      "Answer C": "",
      "Answer D": "",
      "correct answer": "Blue",
      "Difficulty": 2,
      "Last used": "1/2/2020",
      "Frequency": 2,
      "Reg  or TT": "Reg"
    },
    {
      "Category": "Q&A",
      "Sub Category": "musicl instruments",
      "Question": "On a standard piano are there 36 black or white keys?",
      "answer A": "",
      "Answer B": "",
      "Answer C": "",
      "Answer D": "",
      "correct answer": "Black",
      "Difficulty": 1,
      "Last used": "1/5/2020",
      "Frequency": 1,
      "Reg  or TT": "Reg"
    },
    {
      "Category": "Q&A",
      "Sub Category": "alphabets",
      "Question": "In the phonetic alphabet, the letter Q is represented by which city?",
      "answer A": "",
      "Answer B": "",
      "Answer C": "",
      "Answer D": "",
      "correct answer": "Quebec",
      "Difficulty": 2,
      "Last used": "1/6/2020",
      "Frequency": 2,
      "Reg  or TT": "Reg"
    },
    {
      "Category": "Q&A",
      "Sub Category": "slang",
      "Question": "This 4-letter word is slang for a party and can also mean to criticize harshly?",
      "answer A": "",
      "Answer B": "",
      "Answer C": "",
      "Answer D": "",
      "correct answer": "bash",
      "Difficulty": 1,
      "Last used": "1/7/2020",
      "Frequency": 1,
      "Reg  or TT": "Reg"
    },
    {
      "Category": "Q&A",
      "Sub Category": "quotes",
      "Question": "The constitution says treason means giving our enemies “aid and this 2 syllable word?",
      "answer A": "",
      "Answer B": "",
      "Answer C": "",
      "Answer D": "",
      "correct answer": "comfort",
      "Difficulty": 2,
      "Last used": "1/7/2020",
      "Frequency": 1,
      "Reg  or TT": "Reg"
    }
];

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
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

for (var i = 0; i < allQuestions.length; i++) {
    await addDoc(collection(db, "questions"), allQuestions[i]);
    console.log(allQuestions[i]);
};
