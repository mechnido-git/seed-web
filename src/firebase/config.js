// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy8vBajEjqTQDi-OvXx6dc95JDEY5Sr-o",
  authDomain: "idea-website-9344a.firebaseapp.com",
  projectId: "idea-website-9344a",
  storageBucket: "idea-website-9344a.appspot.com",
  messagingSenderId: "346143340752",
  appId: "1:346143340752:web:2d7e6c1e2e6c6e333906d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {app, auth, db };