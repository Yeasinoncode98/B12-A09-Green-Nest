// // src/Components/Footer.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => (
//   <footer className="footer p-10 bg-base-200 text-base-content mt-12">
//     <div>
//       <span className="footer-title text-lg">GreenNest</span>
//       <p className="max-w-xs">
//         Nurture plants, nurture life. Beautiful indoor plants and expert care
//         tips.
//       </p>
//     </div>
//     <div>
//       <span className="footer-title">Quick Links</span>
//       <Link to="/about" className="link link-hover">
//         About
//       </Link>
//       <Link to="/contact" className="link link-hover">
//         Contact
//       </Link>
//       <Link to="/privacy" className="link link-hover">
//         Privacy Policy
//       </Link>
//     </div>
//     <div>
//       <span className="footer-title">Follow Us</span>
//       <div className="flex gap-3">
//         <a aria-label="instagram" href="#" className="link">
//           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M..." />
//           </svg>
//         </a>
//         <a aria-label="facebook" href="#" className="link">
//           Facebook
//         </a>
//         <a aria-label="pinterest" href="#" className="link">
//           Pinterest
//         </a>
//       </div>
//     </div>
//     <div>
//       <span className="footer-title">Legal</span>
//       <p>© 2025 GreenNest. All rights reserved.</p>
//     </div>
//   </footer>
// );

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg">GreenNest</h3>
          <p className="text-sm text-slate-500">
            Bring nature home with care and style.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Follow Us</h4>
          <div className="flex gap-3 mt-2">
            <a className="btn btn-ghost btn-sm">Instagram</a>
            <a className="btn btn-ghost btn-sm">Facebook</a>
            <a className="btn btn-ghost btn-sm">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-slate-500">
        © 2025 GreenNest. All rights reserved.
      </div>
    </footer>
  );
}
