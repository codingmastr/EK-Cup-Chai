import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left Section - Desktop Only */}
      <div className="hidden md:flex md:w-[30%] flex-col justify-between bg-[#f0c9b0] px-6 py-6">
        {/* Logo & Heading */}
        <div className="pt-4 flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-8 h-8 cursor-pointer" />
          </Link>
          <h1 className="text-lg font-medium text-gray-800">
            Welcome to{" "}
            <span className="logo-font text-lg text-chaiBrown">
              Ek Cup Chai
            </span>
          </h1>
        </div>

        {/* Center Card */}
        <div className="bg-white rounded-2xl p-6 m-8 mt-28 shadow-md text-center">
          <h2 className="text-xl font-bold mb-1 text-gray-900">
            Support Creators
          </h2>
          <p className="text-xs text-gray-600 mb-4">
            An easy way for your audience to say thanks
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-left text-sm text-gray-700">
            Buy Tarun a Chai ☕
            <div className="flex gap-2 mt-2">
              <button className="bg-[#efa272] px-2 py-1 rounded text-white font-semibold">
                1
              </button>
              <button className="bg-[#efa272] px-2 py-1 rounded text-white font-semibold">
                3
              </button>
              <button className="bg-[#efa272] px-2 py-1 rounded text-white font-semibold">
                5
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Someone bought 5 chai ☕
            </p>
          </div>
          <button className="mt-4 bg-chaiBrown px-4 py-2 rounded-full font-semibold text-white transition">
            Support ₹50
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center mt-8">
          <div className="flex space-x-[-10px]">
            {["women/1", "men/2", "men/3", "women/4", "men/5"].map((src, i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/${src}.jpg`}
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <p className="text-sm mt-2 font-medium text-gray-800 text-center">Loved by 1,000,000+ creators</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[70%] bg-white rounded-none md:rounded-l-4xl shadow-xl flex flex-col px-4 py-6 md:px-10 md:py-10">

        {/* Top bar */}
        <div className="flex justify-between items-center mb-6 md:mb-10">
          <Link to="/">
          <img src={logo} alt="logo" className="w-8 h-8 md:hidden"/>
          </Link>
          <p className="text-sm text-gray-700">Already have an account?{" "}
            <Link to="/login" className="text-black font-medium underline">Sign in</Link>
          </p>
        </div>

        {/* Centered Form */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-xs md:max-w-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Create your account</h2>
            <p className="text-sm text-gray-500 mb-4 text-center">Choose a username for your page.</p>
            
            {/* Domain Input */}
            <div className="flex items-center border rounded-lg overflow-hidden bg-gray-100 mb-6">
              <span className="px-3 text-gray-600 text-sm font-bold whitespace-nowrap">ekcupchai.com/</span>
              <input type="text" placeholder="yourname" className="flex-1 bg-transparent px-2 py-2 text-gray-800 outline-none text-sm"/>
            </div>
            <button className="w-full bg-chaiBrown hover:bg-opacity-90 text-white font-semibold py-2 rounded-lg transition text-sm mb-3">Sign up</button>
            <p className="text-xs text-gray-500 text-center">By continuing, you agree to the{" "}
              
              <a href="#" className="underline">terms of service</a>{" "} and{" "}
              <a href="#" className="underline">privacy policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
