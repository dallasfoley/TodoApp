import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6OQbbj3EgQ1jtpNAMuRLScv9mBwIGjGE",
  authDomain: "todo-app-8ea78.firebaseapp.com",
  projectId: "todo-app-8ea78",
  storageBucket: "todo-app-8ea78.appspot.com",
  messagingSenderId: "682877407697",
  appId: "1:682877407697:web:704144b2f5470bd29550f0",
  measurementId: "G-3SF3EG25BF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
