import { initializeApp } from "firebase/app";
import { 
            createUserWithEmailAndPassword, 
            getAuth, 
            signInWithEmailAndPassword, 
            signOut
        } from "firebase/auth";
import { 
            addDoc, 
            collection, 
            getFirestore 
        } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDMLTwW8hYdiMTfPPnlwsO0uvJhDpjvtCU",
  authDomain: "netflix-clone-1f92e.firebaseapp.com",
  projectId: "netflix-clone-1f92e",
  storageBucket: "netflix-clone-1f92e.firebasestorage.app",
  messagingSenderId: "1059920682387",
  appId: "1:1059920682387:web:0f42eb07a897892d0b5c66"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProider: "local",
            email
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};