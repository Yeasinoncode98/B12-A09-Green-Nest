
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
      // Use default image if photoURL is empty
      const photoURL = form.photoURL || "https://via.placeholder.com/150";
      await register(form.email, form.password, form.name, photoURL);
      toast.success("Registered Successfully! 🎉");
      navigate("/");
    } catch (err) {
      const errorCode = err.code || "";
      const errorMsg = err.message?.toLowerCase() || "";

      if (
        errorCode === "auth/email-already-in-use" ||
        errorMsg.includes("email-already-in-use")
      ) {
        toast.error("📧 This email is already registered!");
      } else if (
        errorCode === "auth/invalid-email" ||
        errorMsg.includes("invalid-email")
      ) {
        toast.error("⚠️ Please enter a valid email!");
      } else if (
        errorCode === "auth/weak-password" ||
        errorMsg.includes("weak-password")
      ) {
        toast.error("🔐 Password is too weak!");
      } else {
        toast.error("⚠️ Registration failed! Please try again!");
        console.error("Register error:", err);
      }
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success("🎉 Signed up with Google!");
      navigate("/");
    } catch (err) {
      toast.error("⚠️ Google sign-up failed! Try again!");
      console.error("Google signup error:", err);
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
          type="email"
          required
        />
        <input
          value={form.photoURL}
          onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
          placeholder="Photo URL (optional)"
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
            className="absolute right-3 top-3 text-lg text-gray-500 hover:text-gray-700"
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
      <div className="divider">OR</div>
      <button onClick={handleGoogle} className="btn btn-outline w-full">
        Sign up with Google
      </button>
      <p className="text-sm mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-green-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
