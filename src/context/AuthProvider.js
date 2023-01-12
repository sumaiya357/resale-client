import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from  'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext= createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const[loading,setLoading]= useState(true);

    const createUser = (email,password,success) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password,success)
    }
      //login/signin with email
    const  signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
     }
      //signup with google
    const  googleSignIn =(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
     }


    const  updateUser =(userInfo)=>{
        setLoading(true);
        return updateProfile(user, userInfo)
     }
     const logout =() => {
       
        setLoading(true);
        return signOut(auth);
     }

     useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            console.log('auth state changed',currentUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
   }, []);

    const authInfo = {createUser, signIn,user,setUser,logout,loading,setLoading, updateUser,googleSignIn}
    return (
        <div>
             <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;