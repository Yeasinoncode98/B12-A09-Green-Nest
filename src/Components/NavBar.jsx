// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { toast } from "react-toastify";
// import GreenImage from "../assets/GreenImage.jpg";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

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
//             to="/about-us"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 font-semibold"
//                 : "text-slate-700 hover:text-green-600"
//             }
//           >
//             About Us
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

//         {/* AUTH / AVATAR & HAMBURGER */}

//         {/* AUTH / AVATAR & HAMBURGER */}
//         <div className="flex items-center gap-3">
//           {/* User Avatar */}
//           {user ? (
//             <div className="dropdown dropdown-end relative group">
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

//               {/* Tooltip Name on Hover */}
//               <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-green-600 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                 {user.displayName || "Profile"}
//               </span>

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

//           {/* ✅ Hamburger Menu moved to RIGHT of Profile */}
//           <div className="md:hidden relative">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="btn btn-ghost btn-circle focus:outline-none"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//             {menuOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 flex flex-col gap-2 z-50">
//                 <NavLink
//                   to="/"
//                   onClick={() => setMenuOpen(false)}
//                   className="px-4 py-2 hover:bg-green-100 rounded"
//                 >
//                   Home
//                 </NavLink>
//                 <NavLink
//                   to="/plants"
//                   onClick={() => setMenuOpen(false)}
//                   className="px-4 py-2 hover:bg-green-100 rounded"
//                 >
//                   Plants
//                 </NavLink>
//                 <NavLink
//                   to="/profile"
//                   onClick={() => setMenuOpen(false)}
//                   className="px-4 py-2 hover:bg-green-100 rounded"
//                 >
//                   Profile
//                 </NavLink>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// ................22.................

import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import GreenImage from "../assets/GreenImage.jpg";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold"
                : "text-slate-700 hover:text-green-600"
            }
          >
            About Us
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

        {/* AUTH / AVATAR & HAMBURGER */}
        <div className="flex items-center gap-3">
          {/* User Avatar */}
          {user ? (
            <div className="dropdown dropdown-end relative group">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-green-200">
                  <img
                    // Fallback to a default image if photoURL is not available
                    src={user.photoURL || "https://via.placeholder.com/150"}
                    alt="avatar"
                  />
                </div>
              </label>

              {/* Tooltip Name on Hover */}
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-green-600 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {user.displayName || "Profile"}
              </span>

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

          {/* ✅ Hamburger Menu moved to RIGHT of Profile */}
          <div className="md:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-ghost btn-circle focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 flex flex-col gap-2 z-50">
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 hover:bg-green-100 rounded"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/plants"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 hover:bg-green-100 rounded"
                >
                  Plants
                </NavLink>
                <NavLink
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 hover:bg-green-100 rounded"
                >
                  Profile
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
