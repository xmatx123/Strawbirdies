import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
};

// Check if config is present (heuristic: check apiKey)
const isConfigValid = !!firebaseConfig.apiKey;

let app = null;
let db = null;

try {
    if (isConfigValid) {
        app = initializeApp(firebaseConfig);
        db = getDatabase(app);
        console.log("Firebase initialized successfully");
    } else {
        console.warn("Firebase configuration missing. Using Mock Mode.");
    }
} catch (e) {
    console.error("Firebase initialization failed:", e);
}

export { app, db };
