//fixing toggle

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const validatePass = (pw) => {
    if (pw.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(pw)) return "Password must have an uppercase letter";
    if (!/[a-z]/.test(pw)) return "Password must have a lowercase letter";
    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const err = validatePass(form.password);
    if (err) return toast.error(err);

    try {
      await register(form.email, form.password, form.name, form.photoURL);
      toast.success("Registered!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success("Signed in with Google");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-3">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
          className="input w-full"
          required
        />
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="input w-full"
          required
        />
        <input
          value={form.photoURL}
          onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
          placeholder="Photo URL"
          className="input w-full"
        />
        <div className="relative">
          <input
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Password"
            className="input w-full"
            type={showPass ? "text" : "password"}
            required
          />
          <button
            type="button"
            onClick={() => setShowPass((s) => !s)}
            className="absolute right-2 top-2 text-lg text-gray-600"
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button className="btn btn-primary w-full">Register</button>
      </form>

      <div className="divider">OR</div>

      <button onClick={handleGoogle} className="btn btn-outline w-full">
        Sign up with Google
      </button>

      <p className="text-sm mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-green-600">
          Login
        </Link>
      </p>
    </div>
  );
}
