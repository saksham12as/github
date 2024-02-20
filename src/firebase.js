// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDofSfna9oROwDuwJk89J9vtDzu-HpWRB8",
  authDomain: "movies-d4b80.firebaseapp.com",
  projectId: "movies-d4b80",
  storageBucket: "movies-d4b80.appspot.com",
  messagingSenderId: "112864488489",
  appId: "1:112864488489:web:83a8cebb2b8a373e9e8038",
  measurementId: "G-146X6NN56J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
