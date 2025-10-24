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

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import MainLayout from "./Layout/MainLayout";
// import Home from "./Pages/Home";
// import Plants from "./Pages/Plants";
// import PlantDetails from "./Pages/PlantDetails";
// import MyProfile from "./Pages/MyProfile";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import ErrorPage from "./Pages/ErrorPage";
// import PrivateRoute from "./Components/PrivateRoute";
// import { AuthProvider } from "./context/AuthContext"; // ADD THIS IMPORT
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function App() {
//   return (
//     <AuthProvider>
//       {" "}
//       {/* WRAP EVERYTHING HERE */}
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="plants" element={<Plants />} />
//           <Route
//             path="plants/:id"
//             element={
//               <PrivateRoute>
//                 <PlantDetails />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="profile"
//             element={
//               <PrivateRoute>
//                 <MyProfile />
//               </PrivateRoute>
//             }
//           />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Route>
//       </Routes>
//       <ToastContainer position="top-right" />
//     </AuthProvider>
//   );
// }
