
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {  useEffect, useState } from 'react';
import app from "../firebase/Firebase.config";
import AuthContext from "../contexts/AuthContext";


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout=()=>{
       return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    const value = {
        user,
        loading,
        signUp,
        signIn,
        logout
    };
   
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;