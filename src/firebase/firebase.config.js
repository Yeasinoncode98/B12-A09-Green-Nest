// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCTMx9FjfVmSYIgEpVtBJZv_44kPvZ06eA",
// //   authDomain: "green-nest-store-and-shop.firebaseapp.com",
// //   projectId: "green-nest-store-and-shop",
// //   storageBucket: "green-nest-store-and-shop.firebasestorage.app",
// //   messagingSenderId: "818726122955",
// //   appId: "1:818726122955:web:ee0f0f6a474399afef724e",
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // src/firebase/firebase.config.js
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCTMx9FjfVmSYIgEpVtBJZv_44kPvZ06eA",
//   authDomain: "green-nest-store-and-shop.firebaseapp.com",
//   projectId: "green-nest-store-and-shop",
//   storageBucket: "green-nest-store-and-shop.firebasestorage.app",
//   messagingSenderId: "818726122955",
//   appId: "1:818726122955:web:ee0f0f6a474399afef724e",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

// export default app;

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCTMx9FjfVmSYIgEpVtBJZv_44kPvZ06eA",
//   authDomain: "green-nest-store-and-shop.firebaseapp.com",
//   projectId: "green-nest-store-and-shop",
//   storageBucket: "green-nest-store-and-shop.firebasestorage.app",
//   messagingSenderId: "818726122955",
//   appId: "1:818726122955:web:ee0f0f6a474399afef724e",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Auth and Google provider
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

// export default app;


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Google provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
