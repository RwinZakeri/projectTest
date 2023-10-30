// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth' ;

const firebaseConfig = {
  apiKey: "AIzaSyB_oh4AoXP7zAycFDxCZpfjRSNbJ1lpJT0",
  authDomain: "loginproject-da4e0.firebaseapp.com",
  projectId: "loginproject-da4e0",
  storageBucket: "loginproject-da4e0.appspot.com",
  messagingSenderId: "553196462217",
  appId: "1:553196462217:web:77c85f0975729c47382658",
  measurementId: "G-KZF43YHWVV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)