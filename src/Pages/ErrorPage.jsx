import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-slate-600">Page not found</p>
      <Link to="/" className="btn btn-primary mt-6">
        Go Home
      </Link>
    </div>
  );
}
