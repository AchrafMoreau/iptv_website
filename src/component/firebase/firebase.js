import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAiaeCAiLsfDKkOlBG3z28tnINxDvA8QRM",
  authDomain: "test-408fb.firebaseapp.com",
  projectId: "test-408fb",
  storageBucket: "test-408fb.appspot.com",
  messagingSenderId: "86855567524",
  appId: "1:86855567524:web:53f5721805003011d57e31",
  measurementId: "G-PHNM0CTWP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

  

