// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMaEa2MapcM2AQg259I5bl-XQc7DvyJEQ",
  authDomain: "authentication-tutorial-bc140.firebaseapp.com",
  projectId: "authentication-tutorial-bc140",
  storageBucket: "authentication-tutorial-bc140.appspot.com",
  messagingSenderId: "588528973298",
  appId: "1:588528973298:web:429ac87cb98695da2da76b",
  measurementId: "G-E9Z5X3B93Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)