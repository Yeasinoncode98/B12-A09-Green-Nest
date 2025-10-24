import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function MyProfile() {
  const { user, updateUserProfile } = useAuth();
  const [form, setForm] = useState({
    displayName: "",
    photoURL: "",
  });
  const [resetAfterUpdate, setResetAfterUpdate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const isUpdatingRef = useRef(false);

  useEffect(() => {
    if (resetAfterUpdate) {
      setResetAfterUpdate(false);
      return;
    }
    if (isUpdatingRef.current) {
      return;
    }
    if (user) {
      setForm({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user, resetAfterUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    isUpdatingRef.current = true;
    try {
      await updateUserProfile({
        displayName: form.displayName,
        photoURL: form.photoURL,
      });
      toast.success("Profile updated!");
      setForm({ displayName: "", photoURL: "" });
      setResetAfterUpdate(true);
      setIsEditing(false);
      setTimeout(() => {
        isUpdatingRef.current = false;
      }, 300);
    } catch (err) {
      isUpdatingRef.current = false;
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-2xl">
        {/* Main Card */}
        <div
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />

          {/* Decorative Elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-transform duration-700"
            style={{
              transform: isHovered
                ? "translate(30%, -30%) scale(1.2)"
                : "translate(50%, -50%) scale(1)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl transition-transform duration-700"
            style={{
              transform: isHovered
                ? "translate(-30%, 30%) scale(1.2)"
                : "translate(-50%, 50%) scale(1)",
            }}
          />

          {/* Header Section */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 pb-20">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-bold text-3xl text-white mb-2 tracking-tight">
                  My Profile
                </h2>
                <p className="font-semibold text-black text-sm">
                  Manage your personal information
                </p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-xl transition-all duration-300 hover:scale-105 text-sm font-medium border border-white/30"
              >
                {isEditing ? "✕ Cancel" : "✏️ Edit"}
              </button>
            </div>
          </div>

          {/* Profile Avatar & Info Section */}
          <div className="relative px-8 -mt-16 mb-6 flex flex-col md:flex-row items-center md:items-end gap-6">
            {/* Avatar */}
            <div className="relative group order-1 md:order-1">
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl transition-all duration-500 ${
                  isHovered ? "opacity-100 scale-110" : "opacity-60 scale-100"
                }`}
              />
              <div className="relative w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.postimg.cc/3x4X0QmY/snake-plant.png"
                  }
                  alt="Profile"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                  <span className="text-white text-xs font-medium">
                    Change Photo
                  </span>
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 flex flex-col items-center md:items-start order-2 md:order-2 mt-4 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {user?.displayName || "No name set"}
              </h3>

              <p className="text-gray-700 font-semibold text-sm flex items-center gap-2 mt-1">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span className="text-blue-700">{user?.email}</span>
              </p>

              <div className="flex gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                  Active
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative px-8 pb-8">
            <form onSubmit={handleUpdate} className="space-y-5">
              {/* Display Name */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Display Name
                </label>
                <input
                  name="displayName"
                  value={form.displayName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("displayName")}
                  onBlur={() => setFocusedField(null)}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl transition-all duration-300 outline-none ${
                    focusedField === "displayName"
                      ? "border-blue-500 bg-white shadow-lg shadow-blue-100 scale-[1.02]"
                      : "border-gray-200 hover:border-gray-300"
                  } ${!isEditing ? "opacity-60 cursor-not-allowed" : ""}`}
                  placeholder="Enter your display name"
                />
              </div>

              {/* Photo URL */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Photo URL
                </label>
                <input
                  name="photoURL"
                  value={form.photoURL}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("photoURL")}
                  onBlur={() => setFocusedField(null)}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl transition-all duration-300 outline-none ${
                    focusedField === "photoURL"
                      ? "border-purple-500 bg-white shadow-lg shadow-purple-100 scale-[1.02]"
                      : "border-gray-200 hover:border-gray-300"
                  } ${!isEditing ? "opacity-60 cursor-not-allowed" : ""}`}
                  placeholder="Enter photo URL"
                />
              </div>

              {/* Update Button */}
              {isEditing && (
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Update Profile
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
