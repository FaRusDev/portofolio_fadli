import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAYGEjIoRX0p3CkXsoJreYSJRhXGMAs9KU",
    authDomain: "react-simple-ecom.firebaseapp.com",
    projectId: "react-simple-ecom",
    storageBucket: "react-simple-ecom.appspot.com",
    messagingSenderId: "35266322110",
    appId: "1:35266322110:web:ded62d98f9ccd07cb648ef"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db,firebaseApp };

