// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2ead2.firebaseapp.com",
  projectId: "mern-blog-2ead2",
  storageBucket: "mern-blog-2ead2.appspot.com",
  messagingSenderId: "42223249856",
  appId: "1:42223249856:web:d10a2e7cc6e29c49d28025",
  measurementId: "G-ZMH79GJQNG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);