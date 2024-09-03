// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmRUwc1BMXhMvO3wHDbvHr0FSONMGOkgk",
  authDomain: "neflixgpt-1d03b.firebaseapp.com",
  projectId: "neflixgpt-1d03b",
  storageBucket: "neflixgpt-1d03b.appspot.com",
  messagingSenderId: "957077479326",
  appId: "1:957077479326:web:4de36d3a5cfb8323e6808f",
  measurementId: "G-TEPY2DGB5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();