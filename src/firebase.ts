import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0vydT0H7MXSnrVVpmiHa5TYtbPqLkLAE",
  authDomain: "ecohub-9a144.firebaseapp.com",
  projectId: "ecohub-9a144",
  storageBucket: "ecohub-9a144.firebasestorage.app",
  messagingSenderId: "480133798614",
  appId: "1:480133798614:web:a5eddd87a7db668f528777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 THESE ARE IMPORTANT
export const db = getFirestore(app);
export const auth = getAuth(app);