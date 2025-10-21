// // // import { useState } from 'react'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from '/vite.svg'
// // // import './App.css'

// // // function App() {
// // //   const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <div>
// // //         <a href="https://vite.dev" target="_blank">
// // //           <img src={viteLogo} className="logo" alt="Vite logo" />
// // //         </a>
// // //         <a href="https://react.dev" target="_blank">
// // //           <img src={reactLogo} className="logo react" alt="React logo" />
// // //         </a>
// // //       </div>
// // //       <h1>Vite + React</h1>
// // //       <div className="card">
// // //         <button onClick={() => setCount((count) => count + 1)}>
// // //           count is {count}
// // //         </button>
// // //         <p>
// // //           Edit <code>src/App.jsx</code> and save to test HMR
// // //         </p>
// // //       </div>
// // //       <p className="read-the-docs">
// // //         Click on the Vite and React logos to learn more
// // //       </p>
// // //     </>
// // //   )
// // // }

// // // export default App

// // // src/App.jsx
// // import React from "react";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import MainLayout from "./Layout/MainLayout";
// // import Home from "./Pages/Home";
// // import Plants from "./Pages/Plants";
// // import PlantDetails from "./Pages/PlantDetails";
// // import MyProfile from "./Pages/MyProfile";
// // import Login from "./Pages/Login";
// // import Register from "./Pages/Register";
// // import ErrorPage from "./Pages/ErrorPage";
// // import PrivateRoute from "./Components/PrivateRoute";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <MainLayout>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/plants" element={<Plants />} />
// //           <Route
// //             path="/plants/:id"
// //             element={
// //               <PrivateRoute>
// //                 <PlantDetails />
// //               </PrivateRoute>
// //             }
// //           />
// //           <Route
// //             path="/profile"
// //             element={
// //               <PrivateRoute>
// //                 <MyProfile />
// //               </PrivateRoute>
// //             }
// //           />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //           <Route path="*" element={<ErrorPage />} />
// //         </Routes>
// //         <ToastContainer position="top-right" />
// //       </MainLayout>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// // const App = () => {
// //   return (
// //     <div className="text-center text-2xl font-bold mt-10">GreenNest 🌿</div>
// //   );
// // };

// // export default App;

// // src/App.jsx
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainLayout from "./Layout/MainLayout";
// import Home from "./Pages/Home";
// import Plants from "./Pages/Plants";
// import MyProfile from "./Pages/MyProfile";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import ErrorPage from "./Pages/ErrorPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/plants", element: <Plants /> },
//       { path: "/my-profile", element: <MyProfile /> },
//       { path: "/login", element: <Login /> },
//       { path: "/register", element: <Register /> },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Plants from "./Pages/Plants";
import PlantDetails from "./Pages/PlantDetails";
import MyProfile from "./Pages/MyProfile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ErrorPage from "./Pages/ErrorPage";
import PrivateRoute from "./Components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="plants" element={<Plants />} />
          <Route
            path="plants/:id"
            element={
              <PrivateRoute>
                <PlantDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" />
    </>
  );
}
