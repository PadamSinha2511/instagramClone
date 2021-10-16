// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuFpo8wHiy3mLbM7-Y02yWPOWQxx8d7lw",
  authDomain: "insta-clone-c3f10.firebaseapp.com",
  projectId: "insta-clone-c3f10",
  storageBucket: "insta-clone-c3f10.appspot.com",
  messagingSenderId: "782767964436",
  appId: "1:782767964436:web:1ca580639fe93160274201",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
