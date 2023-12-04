import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBOwjs11rEYP9RkdYunuXgYS8jS3Rp6Bqo",
    authDomain: "platform-4c41f.firebaseapp.com",
    projectId: "platform-4c41f",
    storageBucket: "platform-4c41f.appspot.com",
    messagingSenderId: "304244844476",
    appId: "1:304244844476:web:c66d7062d8e314bc546db9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };