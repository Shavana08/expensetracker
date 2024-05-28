import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhetyqFkr-01QN2oVEQXkWv1G2VMQKp3g",
  authDomain: "expense-tracker-e8bf9.firebaseapp.com",
  projectId: "expense-tracker-e8bf9",
  storageBucket: "expense-tracker-e8bf9.appspot.com",
  messagingSenderId: "1050867213114",
  appId: "1:1050867213114:web:ed170b8d0327a4e744e603",
  measurementId: "G-PKTE3QWDTS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
