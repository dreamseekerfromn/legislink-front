import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = import.meta.env.VITE_BASE_FIREBASE_API_KEY;
const authDom = import.meta.VITE_BASE_FIREBASE_AUTH_DOMAIN;
const projID = import.meta.VITE_BASE_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.VITE_BASE_FIREBASE_STORAGE_BUCKET;
const msgSenderID = import.meta.VITE_BASE_FIREBASE_MESSAGE_SENDER_ID;
const appID = import.meta.VITE_BASE_FIREBASE_APP_ID;
const measurementID = import.meta.VITE_BASE_FIREBASE_MEASUREMENT_ID;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDom,
  projectId: projID,
  storageBucket: storageBucket,
  messagingSenderId: msgSenderID,
  appId: appID,
  measurementId: measurementID
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Set persistence
setPersistence(auth, browserSessionPersistence);

auth.useDeviceLanguage();

const googleAuth = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  try {
    //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
    signInWithPopup(auth, googleAuth).then((res) => {
      console.log(res);
    });
  } catch (err) {
    console.log(err);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    alert("you've signed out - congrats.");
  } catch (err) {
    console.log(err);
  }
};
