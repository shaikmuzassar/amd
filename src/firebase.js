// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhfnwltXip04eV4OxPQpi731JofAdd21o",
  authDomain: "amd-demo-3c3b6.firebaseapp.com",
  databaseURL: "https://amd-demo-3c3b6-default-rtdb.firebaseio.com",
  projectId: "amd-demo-3c3b6",
  storageBucket: "amd-demo-3c3b6.firebasestorage.app",
  messagingSenderId: "95472540337",
  appId: "1:95472540337:web:28cbc8eb35c454764b6090",
  measurementId: "G-Y3MMG3Y36Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db, ref, get, set };