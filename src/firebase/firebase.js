import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
        apiKey: "AIzaSyABN2g2t5aNzuIoM9LlEyiUnenlsUOqOwo",
        authDomain: "khali-libreria.firebaseapp.com",
        projectId: "khali-libreria",
        storageBucket: "khali-libreria.appspot.com",
        messagingSenderId: "517766722810",
        appId: "1:517766722810:web:862e7bd52bfaf4c22f0543",
        measurementId: "G-0VLXXSH6BY"
    };
    const app = initializeApp(firebaseConfig);
    export const getFirebase = () => app;
    export { getFirestore };