import { initializeApp } from "firebase/app";
import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHMwTQRU_fjP-FGPNxpmFyonAuasaUN6I",
  authDomain: "crwn-clothings-10611.firebaseapp.com",
  projectId: "crwn-clothings-10611",
  storageBucket: "crwn-clothings-10611.appspot.com",
  messagingSenderId: "77993116562",
  appId: "1:77993116562:web:f5cd5aee6e430b34bd774b",
  measurementId: "G-8TEW1Q3SDM"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exist) {
    console.log('El usuario no existe en la base de datos');
  }
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);