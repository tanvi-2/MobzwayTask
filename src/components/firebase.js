import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXsoTyI0KGNUH7rdirfWEalLdc0VMsGpg",
  authDomain: "auth-form-e79ed.firebaseapp.com",
  projectId: "auth-form-e79ed",
  storageBucket: "auth-form-e79ed.appspot.com",
  messagingSenderId: "654991217619",
  appId: "1:654991217619:web:6a5052376809e9c7285526",
  measurementId: "G-14QFYTGDBE",
  databaseURL: "https://auth-form-e79ed-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, app };
