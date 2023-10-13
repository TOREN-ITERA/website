import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBr5A5kQ1Dak_VeVbEcJYeoCi_g8XUVmWU",
	authDomain: "toren-itera.firebaseapp.com",
	projectId: "toren-itera",
	storageBucket: "toren-itera.appspot.com",
	messagingSenderId: "971511034983",
	appId: "1:971511034983:web:4f67c76d98b8baa9fb50c2",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const fireBase = { storage, auth, db };
