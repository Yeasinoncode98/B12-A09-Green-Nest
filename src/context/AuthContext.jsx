// import React, { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   updateProfile,
//   sendPasswordResetEmail,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth, googleProvider } from "../firebase/firebase.config";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Register user
//   const register = (email, password, name, photoURL) =>
//     createUserWithEmailAndPassword(auth, email, password).then(({ user }) =>
//       updateProfile(user, { displayName: name, photoURL })
//     );

//   // Email/password login
//   const login = (email, password) =>
//     signInWithEmailAndPassword(auth, email, password);

//   // Google login
//   const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

//   // Logout
//   const logout = () => signOut(auth);

//   // Update profile and refresh state
//   const updateUserProfile = async (profile) => {
//     if (auth.currentUser) {
//       await updateProfile(auth.currentUser, profile);
//       setUser({ ...auth.currentUser }); // trigger re-render
//     }
//   };

//   // Password reset
//   const resetPassword = async (email) => {
//     await sendPasswordResetEmail(auth, email);
//     setTimeout(() => {
//       window.open("https://mail.google.com", "_blank");
//     }, 1500);
//   };

//   // Track user state
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (u) => {
//       setUser(u);
//       setLoading(false);
//     });
//     return () => unsub();
//   }, []);

//   const value = {
//     user,
//     loading,
//     register,
//     login,
//     loginWithGoogle,
//     logout,
//     updateUserProfile,
//     resetPassword,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// 2/////////..................

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register user
  const register = async (email, password, name, photoURL) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, { displayName: name, photoURL });
    await user.reload();
    setUser({ ...auth.currentUser });
    return user;
  };

  // Email/password login
  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    await result.user.reload();
    setUser({ ...auth.currentUser });
    return result;
  };

  // Google login
  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    if (!user.photoURL) {
      await updateProfile(user, {
        photoURL: "https://via.placeholder.com/150",
      });
      await user.reload();
    }
    setUser({ ...auth.currentUser });
    return result;
  };

  // Logout
  const logout = () => signOut(auth);

  // Update profile and refresh state
  const updateUserProfile = async (profile) => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, profile);
      await auth.currentUser.reload();
      setUser({ ...auth.currentUser });
    }
  };

  // Password reset
  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
    setTimeout(() => {
      window.open("https://mail.google.com", "_blank");
    }, 1500);
  };

  // Track user state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = {
    user,
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
    updateUserProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
