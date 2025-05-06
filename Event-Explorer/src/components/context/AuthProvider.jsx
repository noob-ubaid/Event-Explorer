import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true)
  console.log(user)
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth , email, password)
  };
  const register = (email , password) => {
    return createUserWithEmailAndPassword(auth , email , password)
  }
  const logOut = () => {
    return signOut(auth)
  }
  const google =() => {
   
    signInWithPopup(auth, provider)
    .then(result => console.log(result))
    .then(error => console.log(error))
  }
  useEffect(() => {
    const isUserLogin = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      isUserLogin();
    };
  }, []);
  const data = {
    logIn,
    register,
    logOut,
    loading,
    setLoading,
    user,
    google,
    setUser
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
