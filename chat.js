// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrcCEgRb2K17TQq2LoEVJhPayHLjF3S_k",
  authDomain: "susurros-desde-la-ventana.firebaseapp.com",
  projectId: "susurros-desde-la-ventana",
  storageBucket: "susurros-desde-la-ventana.firebasestorage.app",
  messagingSenderId: "56714635794",
  appId: "1:56714635794:web:474e3c63dfa5dfbc5b06cb",
  measurementId: "G-NLLJYW55ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

