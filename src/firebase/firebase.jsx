// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCppAHzZhUmVtgsBqo20RjrYtmBaxki7gM",
    authDomain: "proyecto4-restaurant.firebaseapp.com",
    projectId: "proyecto4-restaurant",
    storageBucket: "proyecto4-restaurant.appspot.com",
    messagingSenderId: "256135255420",
    appId: "1:256135255420:web:4fdcbd4ccff03a34f0c0f9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore()