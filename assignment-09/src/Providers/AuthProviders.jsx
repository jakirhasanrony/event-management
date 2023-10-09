import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut } from "firebase/auth";
import app from "../FirebaseConfig/FirebaseConfig";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmail = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

  
     const userLogOut = () =>{
        setLoading(true);
        return signOut (auth);
     }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }

    },[])

    const authInformation = {
        user,
        loading,
        createUserWithEmail,
        signInWithGoogle,
        userLogOut,
        signIn,



    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;