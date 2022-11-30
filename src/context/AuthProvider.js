import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from  'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext= createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const createUser = (email,password) =>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
      
    const  signIn =(email,password)=>{
        
        return signInWithEmailAndPassword(auth,email,password)
     }

     useEffect( () =>{
        onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            console.log('auth state changed',currentUser)
        })
   }, []);

    const authInfo = {createUser, signIn,user}
    return (
        <div>
             <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;