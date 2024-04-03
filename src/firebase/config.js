// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore }from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsylUwHaA6HcMtpJCARNywsND4ribZX5c",
  authDomain: "react-journalapp-ba8ab.firebaseapp.com",
  projectId: "react-journalapp-ba8ab",
  storageBucket: "react-journalapp-ba8ab.appspot.com",
  messagingSenderId: "240221458370",
  appId: "1:240221458370:web:6424df5bede27976a2105b",
  measurementId: "G-44M75VWJ8Y"
};

// Initialize Firebase
export const FireBaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FireBaseapp);
export const FireBaseDB = getFirestore(FireBaseapp);