// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg9vZmSAaknqZqcJqoXCgUg8OfGUShpFw",
  authDomain: "hakaton-304f9.firebaseapp.com",
  projectId: "hakaton-304f9",
  storageBucket: "hakaton-304f9.appspot.com",
  messagingSenderId: "142239618339",
  appId: "1:142239618339:web:16978311129eec50962896",
  measurementId: "G-XB5H7W4QXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);