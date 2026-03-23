import { initializeApp } from "firebase/app";
import { getFirestore, doc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
	authDomain: "personal-trainer-63a5a.firebaseapp.com",
	projectId: "personal-trainer-63a5a",
	storageBucket: "personal-trainer-63a5a.firebasestorage.app",
	messagingSenderId: "402498482297",
	appId: "1:402498482297:web:0d15f597e7313c820724a8",
	measurementId: "G-L92Y7Y3PSG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const REF = doc(db, "config", "precios");
