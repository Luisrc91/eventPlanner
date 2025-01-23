// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "evenplanner-c0ee4.firebaseapp.com",
  projectId: "evenplanner-c0ee4",
  storageBucket: "evenplanner-c0ee4.appspot.com",
  messagingSenderId: "415080618853",
  appId: "1:415080618853:web:6e6dd91244109948979f8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);