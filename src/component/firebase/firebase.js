import firebase from 'firebase/app';
import 'firebase/database';

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
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
