import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsgQmlsUO9fMGUG89JfTj2aTCtYNjvOuA",
    authDomain: "vaibhav-portfolio.firebaseapp.com",
    projectId: "vaibhav-portfolio",
    storageBucket: "vaibhav-portfolio.appspot.com",
    messagingSenderId: "28268301920",
    appId: "1:28268301920:web:fbc6f630b473c18be97d05",
    measurementId: "G-0GQW587Q18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app); //this will be used to upload the pictures

export { db, auth, storage, analytics };