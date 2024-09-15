import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7baCfuTLP8RNLb6bvuQYdtj6pSr-DsMI",
  authDomain: "tech101-81c8d.firebaseapp.com",
  projectId: "tech101-81c8d",
  storageBucket: "tech101-81c8d.appspot.com",
  messagingSenderId: "678016670566",
  appId: "1:678016670566:web:326a95c4e457b0fddf86a7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export default app;

