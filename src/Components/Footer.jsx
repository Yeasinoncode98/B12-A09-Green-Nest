import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-50 border-t border-green-200 mt-12">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-5 gap-8 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-2xl text-black mb-2">GreenNest</h3>
          <p className="text-sm text-black/80">
            Bring nature home with care and style. Explore our plants and make
            your space vibrant.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-black mb-2">Quick Links</h4>
          <ul className="space-y-2 text-black/80">
            <li>
              <a
                href="https://mohonsharif.com/yeasinarafat-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/8801627800198"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Privacy_policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-black mb-2">Services</h4>
          <ul className="space-y-2 text-black/80">
            <li className="hover:text-green-600 transition-colors cursor-pointer">
              Branding
            </li>
            <li className="hover:text-green-600 transition-colors cursor-pointer">
              Design
            </li>
            <li className="hover:text-green-600 transition-colors cursor-pointer">
              Marketing
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-black mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2 justify-center md:justify-start text-black">
            <a
              href="https://www.instagram.com/sickfly_02z?igsh=cXY2aHp0bDVma2Nj&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1Ch1BRN4Ak/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/Yeasinoncode98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-colors text-xl"
            >
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start">
          <form className="w-full max-w-md">
            <h6 className="text-black mb-2 text-lg font-semibold">
              Newsletter
            </h6>
            <fieldset className="w-full">
              <label className="text-sm text-black/80 mb-1 block">
                Enter your email address
              </label>
              <div className="join mt-1 w-full flex justify-center items-center mt-5">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="input input-bordered join-item w-[200px] text-black"
                />
                <button className="btn btn-black join-item text-black bg-green-400 hover:bg-green-600 border-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-sm font-bold text-black border-t border-green-200">
        © 2025 GreenNest. All rights reserved.
      </div>
    </footer>
  );
}
