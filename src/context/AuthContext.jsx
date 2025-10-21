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

//   const register = (email, password, name, photoURL) => {
//     return createUserWithEmailAndPassword(auth, email, password).then(
//       ({ user }) => updateProfile(user, { displayName: name, photoURL })
//     );
//   };

//   const login = (email, password) =>
//     signInWithEmailAndPassword(auth, email, password);

//   const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

//   const logout = () => signOut(auth);

//   const updateUserProfile = (profile) =>
//     updateProfile(auth.currentUser, profile);

//   const resetPassword = (email) => sendPasswordResetEmail(auth, email);

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

//Gmail ridirect

// import React, { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   sendPasswordResetEmail,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth, googleProvider } from "../firebase/firebase.config";

// // Create context
// const AuthContext = createContext();

// // Custom hook for easy use
// export const useAuth = () => useContext(AuthContext);

// // Provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Register user
//   const register = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Login user
//   const login = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Google login
//   const loginWithGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   // Password reset
//   const resetPassword = async (email) => {
//     await sendPasswordResetEmail(auth, email);
//     // Optional Gmail redirect
//     setTimeout(() => {
//       window.open("https://mail.google.com", "_blank");
//     }, 1500);
//   };

//   // Logout
//   const logout = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   // Track user state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Context value
//   const value = {
//     user,
//     register,
//     login,
//     loginWithGoogle,
//     resetPassword,
//     logout,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

//................. display name and gmail

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

//   // Update profile
//   const updateUserProfile = (profile) =>
//     updateProfile(auth.currentUser, profile);

//   // Password reset with Gmail redirect
//   const resetPassword = async (email) => {
//     await sendPasswordResetEmail(auth, email);
//     // Optional: open Gmail in a new tab
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

// co pilot

// context/AuthContext.js
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
  const register = (email, password, name, photoURL) =>
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) =>
      updateProfile(user, { displayName: name, photoURL })
    );

  // Email/password login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Google login
  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

  // Logout
  const logout = () => signOut(auth);

  // Update profile and refresh state
  const updateUserProfile = async (profile) => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, profile);
      setUser({ ...auth.currentUser }); // trigger re-render
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
