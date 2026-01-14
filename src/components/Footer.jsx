import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#fdfaf5] text-[#444] pt-10 pb-16 border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-6 sm:gap-10">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          {/* Copyright Text */}
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Ek Cup Chai{" "}
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:opacity-70 transition-opacity"
            >
              <FaXTwitter className="text-xl" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:opacity-70 transition-opacity"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-between gap-x-6 gap-y-3 font-semibold text-[#1c1c1c] text-center sm:text-left">
          <a href="#" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Help Center</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Apps</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Resources</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
