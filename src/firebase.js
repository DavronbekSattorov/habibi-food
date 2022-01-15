// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzhzwLTAA2Ux85LSP5asUOc3FGyZtm07w",
  authDomain: "habibi-food.firebaseapp.com",
  projectId: "habibi-food",
  storageBucket: "habibi-food.appspot.com",
  messagingSenderId: "99035069117",
  appId: "1:99035069117:web:42026b612e6eee3907d5d4",
  measurementId: "G-T2TCPBX8D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;