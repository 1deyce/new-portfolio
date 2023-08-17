// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAs-1kxBA066-7_GJXtQ2vhgOAYsJj5MV8",
  authDomain: "react-portfolio-1543f.firebaseapp.com",
  projectId: "react-portfolio-1543f",
  storageBucket: "react-portfolio-1543f.appspot.com",
  messagingSenderId: "211762694246",
  appId: "1:211762694246:web:a7cce9f14f20d6299b85a7",
  measurementId: "G-EKR2GDLYH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);