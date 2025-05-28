import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-52BGX6-4DkSallcRSRS2I-bjsytuBqM",
  authDomain: "portifolio-59d41.firebaseapp.com",
  projectId: "portifolio-59d41",
  storageBucket: "portifolio-59d41.firebasestorage.app",
  messagingSenderId: "313959595659",
  appId: "1:313959595659:web:42a52d7bf02049f58b9e8e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db
}