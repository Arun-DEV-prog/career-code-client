import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase.config'
import { parsePath } from 'react-router'

const AuthProvider = ({children}) => {
  const [loading,setLoading]=useState(true);
  const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        setLoading(true);
         return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubcribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
             setUser(currentUser)
        })
        return ()=>{
             unSubcribe();
        }
    },[])
    const authInfo={
        loading,
        user,
         createUser,
         signInUser
    }
  return (
    <AuthContext value={authInfo}>
         {children}
    </AuthContext>
  )
}

export default AuthProvider
