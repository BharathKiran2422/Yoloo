
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "studio-202729145-4eed1",
  appId: "1:1092637376483:web:313b4fe51b69bf1bfc2ad6",
  apiKey: "AIzaSyB14pQ0Q4Nwi_c2xC3FCGscbyRNV59yf6s",
  authDomain: "studio-202729145-4eed1.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "1092637376483"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
