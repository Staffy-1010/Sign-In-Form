import {createContext, useContext, useEffect, useState} from 'react';
import { auth } from "../utils/init-firbase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext({
    currentUser: null,
    register:()=>Promise,
    login:()=>Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({children}){
    const[currentUser, setCurrentUser] =useState(null);

    async function register(Email,Password){
        return createUserWithEmailAndPassword(auth,Email,Password)
    }

    async function login(Email,Password){
        return signInWithEmailAndPassword(auth,Email,Password)
    }

    const value={
        currentUser,
        register,
        login
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
