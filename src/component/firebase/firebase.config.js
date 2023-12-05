// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgtMIWPevuNNjpy4S0wMY5XFeL12hXgbA",
  authDomain: "car-doctor-2f426.firebaseapp.com",
  projectId: "car-doctor-2f426",
  storageBucket: "car-doctor-2f426.appspot.com",
  messagingSenderId: "443218651890",
  appId: "1:443218651890:web:79da6f499733d9f368fe6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;