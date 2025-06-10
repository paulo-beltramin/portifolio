import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCBBGROH89KBwpjD4vkvy1brj4BxhYKggA",
  authDomain: "webcars-caa84.firebaseapp.com",
  projectId: "webcars-caa84",
  storageBucket: "webcars-caa84.firebasestorage.app",
  messagingSenderId: "787023419927",
  appId: "1:787023419927:web:4f0e8281548d6cb175da52"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db
}