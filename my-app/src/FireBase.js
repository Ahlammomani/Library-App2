// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD6kB6w7OEDNCRbG2dg7BRhlrCtYC4aKU",
  authDomain: "library-app-81af6.firebaseapp.com",
  projectId: "library-app-81af6",
  storageBucket: "library-app-81af6.firebasestorage.app",
  messagingSenderId: "1056367337735",
  appId: "1:1056367337735:web:e5346f97a4b89ff03f25a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app); 

export { auth, db, database };