import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import GreenImage from "../assets/GreenImage.jpg";

// Custom styles for glowing animations
const glowStyles = `
  @keyframes glow-pulse {
    0%, 100% {
      box-shadow: 0 0 5px rgba(34, 197, 94, 0.5),
                  0 0 10px rgba(34, 197, 94, 0.3),
                  0 0 15px rgba(34, 197, 94, 0.2);
    }
    50% {
      box-shadow: 0 0 10px rgba(34, 197, 94, 0.8),
                  0 0 20px rgba(34, 197, 94, 0.5),
                  0 0 30px rgba(34, 197, 94, 0.3);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @keyframes slide-in {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  .nav-glow {
    animation: glow-pulse 2s ease-in-out infinite;
  }

  .nav-shimmer {
    background: linear-gradient(
      90deg,
      rgba(34, 197, 94, 0.3) 0%,
      rgba(34, 197, 94, 0.8) 50%,
      rgba(34, 197, 94, 0.3) 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s ease-in-out infinite;
  }

  .nav-slide {
    animation: slide-in 0.4s ease-out forwards;
    transform-origin: left;
  }
`;

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
    <>
      <style>{glowStyles}</style>
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

          {/* NAV LINKS - Desktop with Glowing Active Indicator */}
          <div className="hidden md:flex gap-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-slate-700 hover:text-green-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <>
                      {/* Glowing bottom line with shimmer effect */}
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full nav-glow nav-slide"></span>
                      {/* Additional shimmer overlay */}
                      <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full nav-shimmer"></span>
                      {/* Subtle glow around text */}
                      <span className="absolute inset-0 bg-green-100/30 rounded-lg blur-sm -z-10"></span>
                    </>
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/plants"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-slate-700 hover:text-green-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Plants
                  {isActive && (
                    <>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full nav-glow nav-slide"></span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full nav-shimmer"></span>
                      <span className="absolute inset-0 bg-green-100/30 rounded-lg blur-sm -z-10"></span>
                    </>
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-slate-700 hover:text-green-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About Us
                  {isActive && (
                    <>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full nav-glow nav-slide"></span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full nav-shimmer"></span>
                      <span className="absolute inset-0 bg-green-100/30 rounded-lg blur-sm -z-10"></span>
                    </>
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-slate-700 hover:text-green-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  My Profile
                  {isActive && (
                    <>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full nav-glow nav-slide"></span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full nav-shimmer"></span>
                      <span className="absolute inset-0 bg-green-100/30 rounded-lg blur-sm -z-10"></span>
                    </>
                  )}
                </>
              )}
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

            {/* Hamburger Menu - Mobile with Active Indicator */}
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
                    className={({ isActive }) =>
                      `px-4 py-2 hover:bg-green-100 rounded transition-all relative ${
                        isActive
                          ? "bg-gradient-to-r from-green-50 to-green-100 text-green-700 font-semibold"
                          : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <>
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-green-600 rounded-r nav-glow"></span>
                            <span className="absolute inset-0 bg-green-200/20 rounded animate-pulse"></span>
                          </>
                        )}
                        <span className="relative z-10">Home</span>
                      </>
                    )}
                  </NavLink>
                  <NavLink
                    to="/plants"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-2 hover:bg-green-100 rounded transition-all relative ${
                        isActive
                          ? "bg-gradient-to-r from-green-50 to-green-100 text-green-700 font-semibold"
                          : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <>
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-green-600 rounded-r nav-glow"></span>
                            <span className="absolute inset-0 bg-green-200/20 rounded animate-pulse"></span>
                          </>
                        )}
                        <span className="relative z-10">Plants</span>
                      </>
                    )}
                  </NavLink>
                  <NavLink
                    to="/about-us"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-2 hover:bg-green-100 rounded transition-all relative ${
                        isActive
                          ? "bg-gradient-to-r from-green-50 to-green-100 text-green-700 font-semibold"
                          : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <>
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-green-600 rounded-r nav-glow"></span>
                            <span className="absolute inset-0 bg-green-200/20 rounded animate-pulse"></span>
                          </>
                        )}
                        <span className="relative z-10">About Us</span>
                      </>
                    )}
                  </NavLink>
                  <NavLink
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-2 hover:bg-green-100 rounded transition-all relative ${
                        isActive
                          ? "bg-gradient-to-r from-green-50 to-green-100 text-green-700 font-semibold"
                          : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <>
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-green-600 rounded-r nav-glow"></span>
                            <span className="absolute inset-0 bg-green-200/20 rounded animate-pulse"></span>
                          </>
                        )}
                        <span className="relative z-10">Profile</span>
                      </>
                    )}
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
