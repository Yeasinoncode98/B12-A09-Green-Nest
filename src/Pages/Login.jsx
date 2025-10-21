

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

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
      toast.success("Logged in");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success("Signed in with Google");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleReset = async () => {
    if (!form.email) return toast.error("Enter email for password reset");
    try {
      await resetPassword(form.email);
      toast.success("Password reset email sent");
    } catch (err) {
      toast.error(err.message);
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
            onClick={() => setShowPass((s) => !s)}
            className="absolute right-2 top-2 text-sm"
          >
            {showPass ? "Hide" : "Show"}
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
