import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      toast.success("Login Successful! Welcome back 🌿");
      navigate(from, { replace: true });
    } catch (err) {
      const errorCode = err.code || "";
      const errorMsg = err.message?.toLowerCase() || "";

      if (
        errorCode === "auth/user-not-found" ||
        errorMsg.includes("user-not-found") ||
        errorMsg.includes("no user record")
      ) {
        toast.error("📭 This email is not registered!");
      } else if (
        errorCode === "auth/wrong-password" ||
        errorCode === "auth/invalid-credential" ||
        errorMsg.includes("wrong-password") ||
        errorMsg.includes("invalid-credential")
      ) {
        toast.error("❌ Incorrect Password! Try again 🔐");
      } else if (
        errorCode === "auth/invalid-email" ||
        errorMsg.includes("invalid-email")
      ) {
        toast.error("⚠️ Please enter a valid email!");
      } else {
        toast.error("⚠️ Something went wrong! Please try again!");
        console.error("Login error:", err);
      }
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success("🎉 Signed in with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error("⚠️ Google sign-in failed! Try again!");
      console.error("Google login error:", err);
    }
  };

  const handleReset = async () => {
    if (!form.email) {
      toast.error("📧 Please enter your email first!");
      return;
    }
    try {
      await resetPassword(form.email);
      toast.success("✅ Check your email for reset link 📩");
    } catch (err) {
      toast.error("⚠️ Unable to send reset email!");
      console.error("Reset error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={handleLogin} className="space-y-3">
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="input w-full"
          required
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
            onClick={() => setShowPass((prev) => !prev)}
            className="absolute right-3 top-3 text-lg text-gray-500 hover:text-gray-700"
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <button className="btn btn-primary">Login</button>
          <button type="button" className="text-sm" onClick={handleReset}>
            Forgot Password?
          </button>
        </div>
      </form>

      <div className="divider">OR</div>

      <button onClick={handleGoogle} className="btn btn-outline w-full">
        Continue with Google
      </button>

      <p className="text-sm mt-3">
        Don't have an account?{" "}
        <Link to="/register" className="text-green-600">
          Sign up
        </Link>
      </p>
    </div>
  );
}
