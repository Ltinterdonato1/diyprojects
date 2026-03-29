import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZVVgWN6nSCHCpaR_LdbqI0e6EoQfsFF4",
  authDomain: "diyprojects-500ad.firebaseapp.com",
  projectId: "diyprojects-500ad",
  storageBucket: "diyprojects-500ad.firebasestorage.app",
  messagingSenderId: "159981369746",
  appId: "1:159981369746:web:166725de93f4df727ee94b",
  measurementId: "G-VZ7THR7KHQ"
};

// Initialize Firebase (singleton pattern for Next.js)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);

// Analytics initialization (client-side only)
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  }
  return null;
};

export default app;
