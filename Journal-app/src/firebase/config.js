// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase (reemplazar por los que salen en firebase)
const randomConfig = {
  tuclaveapiaqui: "yourApiKeyHere",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId"
};

// Inicializar Firebase
export const RandomApp = initializeApp(randomConfig);
export const RandomAuth = getAuth(RandomApp);
export const RandomDB = getFirestore(RandomApp);
