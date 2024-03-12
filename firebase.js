// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5_h592yzp-DT9SqEe3J2haUXmNqcQNgU",
  authDomain: "react-notes-15bb8.firebaseapp.com",
  projectId: "react-notes-15bb8",
  storageBucket: "react-notes-15bb8.appspot.com",
  messagingSenderId: "163261778082",
  appId: "1:163261778082:web:524668499b98c185d0effb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Access Database
const db = getFirestore(app)
// Access notes collection
const notesCollection = collection(db, "notes")