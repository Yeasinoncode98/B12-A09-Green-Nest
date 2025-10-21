// import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { toast } from "react-toastify";
// import GreenImage from "../assets/GreenImage.jpg"; // ✅ keep correct extension

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logout();
//       toast.success("Logged out");
//       navigate("/");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-2 flex items-center justify-between">
//         {/* ================= LOGO ================= */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src={GreenImage}
//             alt="GreenNest Logo"
//             className="w-[120px] h-auto md:w-[100px] object-contain"
//           />
//           {/* <div>
//             <h1 className="text-xl font-bold text-green-600 leading-tight">
//               GreenNest
//             </h1>
//             <p className="text-xs text-slate-500">Indoor Plant Care</p>
//           </div> */}
//         </Link>

//         {/* ================= NAV LINKS ================= */}
//         <div className="hidden md:flex gap-6 items-center">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 font-semibold"
//                 : "text-slate-700 hover:text-green-600"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/plants"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 font-semibold"
//                 : "text-slate-700 hover:text-green-600"
//             }
//           >
//             Plants
//           </NavLink>
//           <NavLink
//             to="/profile"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 font-semibold"
//                 : "text-slate-700 hover:text-green-600"
//             }
//           >
//             My Profile
//           </NavLink>
//         </div>

//         {/* ================= AUTH / AVATAR ================= */}
//         <div className="flex items-center gap-3">
//           {user ? (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full ring ring-green-200">
//                   <img
//                     src={
//                       user.photoURL ||
//                       "https://i.postimg.cc/3x4X0QmY/snake-plant.png"
//                     }
//                     alt="avatar"
//                   />
//                 </div>
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
//               >
//                 <li>
//                   <span className="font-semibold text-green-700">
//                     {user.displayName || "No name"}
//                   </span>
//                 </li>
//                 <li>
//                   <span className="text-xs text-slate-500">{user.email}</span>
//                 </li>
//                 <li>
//                   <Link to="/profile">Profile</Link>
//                 </li>
//                 <li>
//                   <button
//                     className="text-red-600 hover:text-red-700"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <>
//               <Link className="btn btn-outline btn-sm" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-primary btn-sm" to="/register">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

//.............real time update

// import React, { useEffect, useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { toast } from "react-toastify";
// import GreenImage from "../assets/GreenImage.jpg";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [currentUser, setCurrentUser] = useState(user);

//   // Update local state whenever user changes (real-time)
//   useEffect(() => {
//     setCurrentUser(user);
//   }, [user]);

//   const handleLogout = async () => {
//     try {
//       await logout();
//       toast.success("Logged out");
//       navigate("/");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-2 flex items-center justify-between">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src={GreenImage}
//             alt="GreenNest Logo"
//             className="w-[120px] h-auto md:w-[100px] object-contain"
//           />
//         </Link>

//         {/* NAV LINKS */}
//         <div className="hidden md:flex gap-6 items-center">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 font-semibold"
//                 : "text-slate-700 hover:text-green-600"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/plants"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 font-semibold"
//                 : "text-slate-700 hover:text-green-600"
//             }
//           >
//             Plants
//           </NavLink>
//           <NavLink
//             to="/profile"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 font-semibold"
//                 : "text-slate-700 hover:text-green-600"
//             }
//           >
//             My Profile
//           </NavLink>
//         </div>

//         {/* AUTH / AVATAR */}
//         <div className="flex items-center gap-3">
//           {currentUser ? (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full ring ring-green-200">
//                   <img
//                     src={
//                       currentUser.photoURL ||
//                       "https://i.postimg.cc/3x4X0QmY/snake-plant.png"
//                     }
//                     alt="avatar"
//                   />
//                 </div>
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
//               >
//                 <li>
//                   <span className="font-semibold text-green-700">
//                     {currentUser.displayName || "No name"}
//                   </span>
//                 </li>
//                 <li>
//                   <span className="text-xs text-slate-500">
//                     {currentUser.email}
//                   </span>
//                 </li>
//                 <li>
//                   <Link to="/profile">Profile</Link>
//                 </li>
//                 <li>
//                   <button
//                     className="text-red-600 hover:text-red-700"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <>
//               <Link className="btn btn-outline btn-sm" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-primary btn-sm" to="/register">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

//co-pilot

import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import GreenImage from "../assets/GreenImage.jpg";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={GreenImage}
            alt="GreenNest Logo"
            className="w-[120px] h-auto md:w-[100px] object-contain"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold"
                : "text-slate-700 hover:text-green-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold"
                : "text-slate-700 hover:text-green-600"
            }
          >
            Plants
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold"
                : "text-slate-700 hover:text-green-600"
            }
          >
            My Profile
          </NavLink>
        </div>

        {/* AUTH / AVATAR */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-green-200">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.postimg.cc/3x4X0QmY/snake-plant.png"
                    }
                    alt="avatar"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
              >
                <li>
                  <span className="font-semibold text-green-700">
                    {user.displayName || "No name"}
                  </span>
                </li>
                <li>
                  <span className="text-xs text-slate-500">{user.email}</span>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button
                    className="text-red-600 hover:text-red-700"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link className="btn btn-outline btn-sm" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary btn-sm" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
