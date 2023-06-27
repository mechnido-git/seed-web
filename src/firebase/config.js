// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxjmfUK3VdUYfOOxnfYKsjgzxehN4nJas",
  authDomain: "seed-25898.firebaseapp.com",
  projectId: "seed-25898",
  storageBucket: "seed-25898.appspot.com",
  messagingSenderId: "414118721471",
  appId: "1:414118721471:web:decc03b7f100e1876cd30a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {app, auth, db, storage };