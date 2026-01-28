import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";


let auth = null;
if (app) {
    try {
        auth = getAuth(app);
    } catch (e) {
        console.warn("Auth initialization failed, falling back to mock");
    }
}

// Mock User for offline mode
const MOCK_USER = {
    uid: "mock-user-" + Math.floor(Math.random() * 10000),
    isAnonymous: true,
    displayName: "Guest"
};

export const AuthService = {
    signIn: async () => {
        if (!auth) {
            console.log("Mock SignIn successful");
            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 500));
            // Store mock user in session storage to persist across reloads if needed?
            // For now just return new one or keep static
            return MOCK_USER;
        }
        try {
            const result = await signInAnonymously(auth);
            return result.user;
        } catch (error) {
            console.error("Error signing in anonymously:", error);
            throw error;
        }
    },

    onAuthStateChange: (callback) => {
        if (!auth) {
            // Trigger callback immediately with mock user if "signed in" logic is desired,
            // or wait for sign in. user is usually null initially.
            // mimic firebase behavior: initial null, then user.
            // but here we just simplify: if we called signin, we get user.
            // actually onAuthStateChanged usually fires on load.
            // Let's fire with null then maybe mock user?
            // simplified: just do nothing or call with null.
            callback(null);
            return () => { };
        }
        return onAuthStateChanged(auth, callback);
    },

    getCurrentUser: () => {
        if (!auth) return MOCK_USER;
        return auth.currentUser;
    },

    signOut: () => {
        if (!auth) return Promise.resolve();
        return auth.signOut();
    }
};
