import React from "react";
import { FaFacebookF, FaGithub, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          KeenKeeper
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-emerald-200 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-6">
          <p className="mb-3 text-sm">Social Links</p>
          <div className="flex justify-center gap-4">

            <a className="bg-white text-emerald-900 p-2 rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </a>

            <a className="bg-white text-emerald-900 p-2 rounded-full hover:scale-110 transition">
              <FaGithub />
            </a>

            <a className="bg-white text-emerald-900 p-2 rounded-full hover:scale-110 transition">
              <FaTimes />
            </a>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-emerald-300 mt-8 gap-2">
          
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;