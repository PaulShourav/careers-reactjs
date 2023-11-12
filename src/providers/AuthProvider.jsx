
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updatePassword } from "firebase/auth";
import {  useEffect, useState } from 'react';
import app from "../firebase/Firebase.config";
import AuthContext from "../contexts/AuthContext";


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout=()=>{
        setIsLoading(false)
       return signOut(auth)
    }
    const updateUserPassword=(newPassword)=>{
       
      return updatePassword(user, newPassword)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);
    const value = {
        user,
        isLoading,
        signUp,
        signIn,
        logout,
        updateUserPassword
    };
   
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;