// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For MVP, user needs to replace these or we use env vars
const firebaseConfig = {
    apiKey: "AIzaSyB3pnwgS5TcJcGFaXguc0FDKOWetPuKk2Q",
    authDomain: "strawbirdies-86428.firebaseapp.com",
    projectId: "strawbirdies-86428",
    storageBucket: "strawbirdies-86428.firebasestorage.app",
    messagingSenderId: "166360934218",
    appId: "1:166360934218:web:24894bc89e49953dfd83b3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
