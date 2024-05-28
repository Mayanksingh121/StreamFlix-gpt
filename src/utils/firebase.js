// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsAbNZ20aarTAr18Pm2GhgPl3by_dGiRM",
  authDomain: "streamflixgpt-6205c.firebaseapp.com",
  projectId: "streamflixgpt-6205c",
  storageBucket: "streamflixgpt-6205c.appspot.com",
  messagingSenderId: "880948798472",
  appId: "1:880948798472:web:60a0c4d0f8c47d730d9dbd",
  measurementId: "G-LNFCEMWFS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
