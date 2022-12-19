import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KITTY,
  authDomain: "codary-challenge.firebaseapp.com",
  databaseURL: "https://codary-challenge-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "codary-challenge",
  storageBucket: "codary-challenge.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_SERVER_ID
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);