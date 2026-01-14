import React, { useState } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiHelpCircle,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaRegHeart, FaApple, FaAndroid } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-2 md:py-4 px-4 sm:px-6 bg-white border-b border-gray-100 z-100">
        {/* MOBILE VIEW */}
        <div className="flex items-center justify-between w-full md:hidden">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl text-gray-900"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          </div>

          {/* Right: Login/Signup */}
          <div className="flex items-center gap-1">
            <a href="/login" className="text-xs font-bold text-gray-900">
              Log in
            </a>
            <a
              href="/signup"
              className="bg-chaiBrown text-white text-xs font-bold px-3 py-1 rounded-full"
            >
              Sign up
            </a>
          </div>
        </div>

        {/* DESKTOP LEFT */}
        <div className="hidden md:flex items-center gap-8 text-base font-bold text-gray-900">
          <a href="#" className="hover:text-chaiBrown transition">FAQ</a>
          <a href="#" className="flex items-center gap-1 hover:text-chaiBrown transition">
            Wall of <FaRegHeart className="text-chaiBrown" />
          </a>
          <div className="relative z-101">
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-chaiBrown transition"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Resources</span>
              <FiChevronDown className="text-base" />
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-10 left-0 w-52 bg-white shadow-xl rounded-xl p-4 space-y-4 border border-gray-100 z-105">
                <a href="#" className="flex items-center gap-2 text-sm hover:text-chaiBrown">
                  <FiHelpCircle className="text-lg" />
                  <span>Help Center</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-sm hover:text-chaiBrown">
                  <FaApple className="text-lg" />
                  <span>iOS App</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-sm hover:text-chaiBrown">
                  <FaAndroid className="text-lg" />
                  <span>Android App</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Center Logo */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Ek Cup Chai" className="w-12 h-12 object-contain" />
            <h1 className="logo-font text-lg text-chaiBrown leading-none pt-1">Ek Cup Chai</h1>
          </div>
        </div>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search creators"
              className="bg-gray-100 text-sm px-4 py-2 pl-10 rounded-full placeholder:text-gray-500"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500 text-base" />
          </div>
          <a href="/login" className="text-base font-bold text-gray-900 hover:text-chaiBrown transition">
            Log in
          </a>
          <a href="/signup" className="bg-chaiBrown text-white font-bold text-base px-5 py-2 rounded-full hover:opacity-90 transition">
            Sign up
          </a>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-99 flex flex-col gap-6 p-6 pt-20 text-gray-900 text-lg font-semibold animate-slideIn overflow-y-auto">
          <a href="#" className="hover:text-chaiBrown">FAQ</a>
          <a href="#" className="hover:text-chaiBrown flex items-center gap-2">
            Wall of <FaRegHeart className="text-chaiBrown" />
          </a>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Resources</span>
            <a href="#" className="hover:text-chaiBrown flex items-center gap-2">
              <FiHelpCircle />
              Help Center
            </a>
            <a href="#" className="hover:text-chaiBrown flex items-center gap-2">
              <FaApple />
              iOS App
            </a>
            <a href="#" className="hover:text-chaiBrown flex items-center gap-2">
              <FaAndroid />
              Android App
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
