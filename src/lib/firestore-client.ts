// Lightweight Firestore-only client. Kept separate from `@/lib/firebase`
// so public pages never pull in Firebase Auth / Storage (and the auth iframe).
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAQpLZhix7F98DpSKHYxZT3KjF31EHCOk0",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "nativa-studio.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "nativa-studio",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "nativa-studio.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "41523484990",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:41523484990:web:83bdbc22d218759aaf746f",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

/** Fire-and-forget lead log. Loaded on demand so it never blocks first paint. */
export async function logLead(data: Record<string, unknown>) {
  const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
  await addDoc(collection(db, "leads"), { ...data, submittedAt: serverTimestamp() });
}
