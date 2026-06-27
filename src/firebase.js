import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDaObccA_M5BZD6P__UMfbD2TLMl1hNxcA",
  authDomain: "react-task-manager-7b2de.firebaseapp.com",
  projectId: "react-task-manager-7b2de",
  storageBucket: "react-task-manager-7b2de.firebasestorage.app",
  messagingSenderId: "960147218482",
  appId: "1:960147218482:web:2d5dca1408a0ba142c9c2b",
  measurementId: "G-R54Q93F74Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);