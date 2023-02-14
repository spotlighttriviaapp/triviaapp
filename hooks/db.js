// import { initializeApp } from "firebase/app";
// // import { getAuth } from 'firebase/auth'
// import { getFirestore, doc, getDoc } from "firebase/firestore";

// const getHosts = async () => {
//   const firebaseConfig = {
//     apiKey: "AIzaSyAu7mDdg8SoY5DXQwcks5Q_le_aw2bEJ48",
//     authDomain: "spotlight-trivia-app.firebaseapp.com",
//     projectId: "spotlight-trivia-app",
//     storageBucket: "spotlight-trivia-app.appspot.com",
//     messagingSenderId: "575723277238",
//     appId: "1:575723277238:web:ede0ad04f2c9f11d484f17",
//     measurementId: "G-7J30SV35EL",
//   };

//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);
//   // const hostsRef = collection(db, 'hosts')
//   const hostRef = doc(db, "hosts", "MMI3wjjUq6oH6ymbz5CV");
//   const host = await getDoc(hostRef);

//   const hostName = host.get("hostname");

//   return hostName;
// };

// export default getHosts;
