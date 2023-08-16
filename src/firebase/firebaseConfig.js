import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGrGU6jIGTtZNvwuOEMpdYec6WfRcLQ0o",
  authDomain: "projextfirebase.firebaseapp.com",
  projectId: "projextfirebase",
  storageBucket: "projextfirebase.appspot.com",
  messagingSenderId: "517292727233",
  appId: "1:517292727233:web:ae6aeb6c82eda180eead40",
};

const app = initializeApp(firebaseConfig);

//yetkilendirme için gerekli kurum
export const auth = getAuth(app);

// google sağlayıcı kurulum
export const provider = new GoogleAuthProvider();

// veri tabanı kurrulumu

export const db = getFirestore(app);
