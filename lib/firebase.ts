// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAu7mDdg8SoY5DXQwcks5Q_le_aw2bEJ48',
  authDomain: 'spotlight-trivia-app.firebaseapp.com',
  projectId: 'spotlight-trivia-app',
  storageBucket: 'spotlight-trivia-app.appspot.com',
  messagingSenderId: '575723277238',
  appId: '1:575723277238:web:ede0ad04f2c9f11d484f17',
  measurementId: 'G-7J30SV35EL',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export async function getStaticProps() {
  const hostRef = doc(db, 'hosts', 'MMI3wjjUq6oH6ymbz5CV')
  const hostDoc = await getDoc(hostRef)

  if (hostDoc.exists()) {
    console.log('Document exists!')
  } else {
    console.log('Document does not exist!')
    return 'null'
  }

  return {
    prop: { hostname: hostDoc.get('hostname') },
  }
}
