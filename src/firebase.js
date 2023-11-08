// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// require('dotenv').config()

// console.log(process.env)
  // import 'dotenv/config' 
  // require('dotenv').config()
  // const dotenv= require('dotenv').config()

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: REACT_APP_APPID
//  };

const firebaseConfig = {
  apiKey: "AIzaSyCFvDHqMnFq79Fd632MbX-QWwH-jg_Am2o",
  authDomain: "tailflix-412a5.firebaseapp.com",
  projectId: "tailflix-412a5",
  storageBucket: "tailflix-412a5.appspot.com",
  messagingSenderId: "113729873054",
  appId: "1:113729873054:web:04525537cbc72b242e478f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

// import { initializeApp } from "firebase/app";
  
  // import { getAuth } from "firebase/auth";
  // import { getFirestore } from "firebase/firestore";
  //volver a activar
  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
};*/

/* volver a activar
const firebaseConfigCode = {
  apiKey: "AIzaSyCFvDHqMnFq79Fd632MbX-QWwH-jg_Am2o",
  authDomain: "tailflix-412a5.firebaseapp.com",
  projectId: "tailflix-412a5",
  storageBucket: "tailflix-412a5.appspot.com",
  messagingSenderId: "113729873054",
  appId: "1:113729873054:web:04525537cbc72b242e478f"
};


// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfigCode);
export const auth = getAuth(app);
export const db = getFirestore(app)*/