import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {collection , getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBhRpJdWcfBHZmLA5BLuCjeh2PMAn2RowQ",
  authDomain: "cinema-app-27cee.firebaseapp.com",
  projectId: "cinema-app-27cee",
  storageBucket: "cinema-app-27cee.appspot.com",
  messagingSenderId: "673689497843",
  appId: "1:673689497843:web:797686657ce6407cc64786"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth()
const filmCollection = getFirestore(firebaseApp)
export const dataBase = collection(filmCollection , 'films')