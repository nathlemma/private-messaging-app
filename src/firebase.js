import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsYrRjFMrmn7sPihNNgM-OGgQm_ZhS3Kw",
  authDomain: "chat-ddc18.firebaseapp.com",
  projectId: "chat-ddc18",
  storageBucket: "chat-ddc18.appspot.com",
  messagingSenderId: "421836050384",
  appId: "1:421836050384:web:3d3604d1f4c09f37ed73d5",
  measurementId: "G-Q7ZY9JW99R",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
