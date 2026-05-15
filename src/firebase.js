// ─────────────────────────────────────────────────────────────────────────────
// STEP: Replace the values below with YOUR Firebase project config
// Get them from: Firebase Console → Project Settings → Your Apps → Web App
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:            "PASTE_YOUR_apiKey_HERE",
  authDomain:        "PASTE_YOUR_authDomain_HERE",
  projectId:         "PASTE_YOUR_projectId_HERE",
  storageBucket:     "PASTE_YOUR_storageBucket_HERE",
  messagingSenderId: "PASTE_YOUR_messagingSenderId_HERE",
  appId:             "PASTE_YOUR_appId_HERE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
