// // src/Pages/ErrorPage.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const ErrorPage = () => (
//   <div className="min-h-screen flex items-center justify-center">
//     <div className="text-center p-6">
//       <h1 className="text-4xl font-bold mb-4">404</h1>
//       <p className="mb-4">We couldn't find that page.</p>
//       <Link to="/" className="btn btn-primary">
//         Go Home
//       </Link>
//     </div>
//   </div>
// );

// export default ErrorPage;

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
