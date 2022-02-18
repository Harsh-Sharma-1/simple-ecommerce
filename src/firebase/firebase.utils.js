import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCa8iKaHxqbhnT72NCpHkBWUUXtFxLAgv0",
  authDomain: "crown-ecom-ff32e.firebaseapp.com",
  projectId: "crown-ecom-ff32e",
  storageBucket: "crown-ecom-ff32e.appspot.com",
  messagingSenderId: "211499748043",
  appId: "1:211499748043:web:aea3b45b680871268ce94e",
};

const app = initializeApp(config);

export const auth = getAuth(app);
// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider(auth);
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
