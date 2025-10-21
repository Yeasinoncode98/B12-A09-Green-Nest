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

      setTimeout(() => {
        isUpdatingRef.current = false;
      }, 300);
    } catch (err) {
      isUpdatingRef.current = false;
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto mt-6">
      <h2 className="font-bold text-2xl mb-4">My Profile</h2>

      <div className="flex items-center gap-4 mb-4">
        <div className="avatar">
          <div className="w-20 h-20 rounded-full">
            <img
              src={
                user?.photoURL ||
                "https://i.postimg.cc/3x4X0QmY/snake-plant.png"
              }
              alt="Profile Preview"
            />
          </div>
        </div>
        <div>
          <div className="font-semibold">{user?.displayName || "No name"}</div>
          <div className="text-sm text-slate-500">{user?.email}</div>
        </div>
      </div>

      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          name="displayName"
          value={form.displayName}
          onChange={handleChange}
          className="input w-full"
          placeholder="Display name"
        />
        <input
          name="photoURL"
          value={form.photoURL}
          onChange={handleChange}
          className="input w-full"
          placeholder="Photo URL"
        />
        <button type="submit" className="btn btn-primary w-full">
          Update Profile
        </button>
      </form>
    </div>
  );
}

//caldude
