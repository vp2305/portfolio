import firebase from "firebase";
import { getAnalytics } from "firebase/analytics";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsgQmlsUO9fMGUG89JfTj2aTCtYNjvOuA",
    authDomain: "vaibhav-portfolio.firebaseapp.com",
    projectId: "vaibhav-portfolio",
    storageBucket: "vaibhav-portfolio.appspot.com",
    messagingSenderId: "28268301920",
    appId: "1:28268301920:web:fbc6f630b473c18be97d05",
    measurementId: "G-0GQW587Q18"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage(); //this will be used to upload the pictures
const googleAnalytics = getAnalytics(firebaseApp);

export { db, auth, storage, googleAnalytics };