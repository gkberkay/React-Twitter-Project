// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN-O_IXFv7v58zGxPfz3t5MVdVZCY-elI",
    authDomain: "twitter-clone-9fba6.firebaseapp.com",
    projectId: "twitter-clone-9fba6",
    storageBucket: "twitter-clone-9fba6.appspot.com",
    messagingSenderId: "344993488786",
    appId: "1:344993488786:web:47f8a7be4e849d7cbd2b4b"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };