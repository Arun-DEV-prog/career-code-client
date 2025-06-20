import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../../firebase.config'


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
    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
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
         signInUser,
         signOutUser
        
    }
  return (
    <AuthContext value={authInfo}>
         {children}
    </AuthContext>
  )
}

export default AuthProvider
