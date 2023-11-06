// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvAtObKknpJM_FDfkDdqabrqKgsVDppPY",
  authDomain: "film-of-aj.firebaseapp.com",
  projectId: "film-of-aj",
  storageBucket: "film-of-aj.appspot.com",
  messagingSenderId: "1089669341280",
  appId: "1:1089669341280:web:f92382abb18496b450e305",
  measurementId: "G-155KH8VXWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)