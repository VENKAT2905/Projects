import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyAJJ_-XQ3mvwgCVKRX0dK8vokm8Lzd5Nfs",
    authDomain: "netflix-clone-1f7ea.firebaseapp.com",
    projectId: "netflix-clone-1f7ea",
    storageBucket: "netflix-clone-1f7ea.firebasestorage.app",
    messagingSenderId: "280396405251",
    appId: "1:280396405251:web:ac0b73ed79fb66b4be8c36"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            email
        });
    } catch (error) {
        console.error("Error signing up:", error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error logging in:", error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
};

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error logging out:", error);
    }
};

export { auth, db, login, logout, signup };

