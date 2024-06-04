// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "mentry-81648.firebaseapp.com",
  projectId: "mentry-81648",
  storageBucket: "mentry-81648.appspot.com",
  messagingSenderId: "1038903259657",
  appId: "1:1038903259657:web:e2a7d3ddb81d8efd6cfed8",
  measurementId: "G-DB0V4Q2Y5D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
