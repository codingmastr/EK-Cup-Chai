import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import logo from "../assets/logo.png";

const testimonials = [
  {
    name: "Riya is funding her art with Ek Cup Chai",
    supporters: "2,200",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Aman shares coding tips & gets chai love!",
    supporters: "4,800",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Devika writes poetry, powered by chai ☕",
    supporters: "700",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Yash is podcasting over sips of chai",
    supporters: "1,120",
    avatar: "https://i.pravatar.cc/100?img=17",
  },
  {
    name: "Simran creates tutorials & chai fuels her",
    supporters: "3,450",
    avatar: "https://i.pravatar.cc/100?img=22",
  },
  {
    name: "Nikhil makes music & gets support via chai",
    supporters: "2,670",
    avatar: "https://i.pravatar.cc/100?img=29",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full px-4 sm:px-8 text-center bg-[#f5f1ee] overflow-hidden pt-[100px] min-h-screen">
      {/* Floating Cards (Hidden on Mobile) */}
      <div className="hidden md:block absolute inset-0 z-0 max-w-full overflow-hidden">
        {/* Left side cards */}
        <div className="absolute top-45 -left-1 w-50 rotate-[-6deg] z-10">
          <Tilt glareEnable={false}>
            <Card {...testimonials[0]} />
          </Tilt>
        </div>
        <div className="absolute top-88.25 left-24 w-50 rotate-[-4deg] z-20">
          <Tilt glareEnable={false}>
            <Card {...testimonials[1]} />
          </Tilt>
        </div>
        <div className="absolute bottom-25 -left-1 w-50 rotate-[6deg] z-30">
          <Tilt glareEnable={false}>
            <Card {...testimonials[2]} />
          </Tilt>
        </div>

        {/* Right side cards */}
        <div className="absolute top-45 -right-1 w-50 rotate-[6deg] z-10">
          <Tilt glareEnable={false}>
            <Card {...testimonials[3]} />
          </Tilt>
        </div>
        <div className="absolute top-88.25 right-24 w-50 rotate-[4deg] z-20">
          <Tilt glareEnable={false}>
            <Card {...testimonials[4]} />
          </Tilt>
        </div>
        <div className="absolute bottom-25 -right-1 w-50 rotate-[-6deg] z-30">
          <Tilt glareEnable={false}>
            <Card {...testimonials[5]} />
          </Tilt>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-50 flex flex-col justify-center items-center w-full max-w-3xl mx-auto px-2 sm:px-4 min-h-[calc(100vh-150px)]">
        {/* Star line */}
        <div className="flex flex-wrap justify-center items-center gap-1 text-sm font-medium text-chaiBrown mb-8 sm:mb-12">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
          <span className="ml-2">Loved by 1,000,000+ chai supporters</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-black leading-tight mb-6 text-center">
          Create more. <br />
          <span className="logo-font text-chaiBrown">Chai more.</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-base sm:text-xl text-gray-500 mb-18 tracking-wide text-center px-2 sm:px-0">
          Serving content? Let your fans serve the chai. It's simpler than you
          think.
        </p>

        {/* Button with logo */}
        <div className="relative inline-block group mb-6 sm:mb-8">
          <img
            src={logo}
            alt="chai logo"
            className="w-14 h-14 absolute z-10 -top-7 -left-3 rotate-[-10deg] 
                      group-hover:top-9 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:rotate-0 
                      group-focus:top-9 group-focus:left-1/2 group-focus:-translate-x-1/2 group-focus:-translate-y-1/2 group-focus:rotate-0 
                      group-active:top-9 group-active:left-1/2 group-active:-translate-x-1/2 group-active:-translate-y-1/2 group-active:rotate-0 
                      transition-all duration-500 ease-in-out pointer-events-none"
          />

          <a
            href="/signup"
            className="inline-block bg-chaiBrown text-white font-bold text-lg sm:text-xl px-10 sm:px-12 py-4 sm:py-5 rounded-full border-2 border-[#BB591C] shadow-[7px_5px_56px_-20px_#BB591C] hover:bg-[#BB591C] hover:shadow-[7px_5px_66px_-10px_#BB591C] transition duration-300 ease-in-out relative overflow-hidden"
          >
            <span className="group-hover:opacity-0 transition-opacity duration-300">
              GET STARTED
            </span>
          </a>
        </div>

        {/* Bottom tagline */}
        <p className="text-xs sm:text-sm text-gray-500 max-w-md lg:max-w-lg px-6 sm:px-12 mx-auto text-center leading-relaxed">
          Setting up your chai page takes less time than boiling water!
        </p>
      </div>
    </section>
  );
};

// Card Component
const Card = ({ name, supporters, avatar }) => (
  <div
    className="backdrop-blur-md bg-[#edcfbc]/50 text-chaiBrown rounded-2xl p-4 text-center text-sm flex flex-col items-center gap-2 border border-[#BB591C]"
    style={{
      boxShadow:
        "rgba(187, 89, 28, 0.25) 0px 50px 100px -20px, rgba(187, 89, 28, 0.3) 0px 30px 60px -30px, rgba(187, 89, 28, 0.35) 0px -2px 6px 0px inset",
    }}
  >
    <img
      src={avatar}
      alt={name}
      className="w-10 h-10 rounded-full object-cover"
    />
    <span className="font-semibold text-sm text-center">{name}</span>
    <div className="flex items-center gap-1 text-chaiBrown text-xs mt-[-4px]">
      <FaHeart className="text-chaiBrown opacity-80" />
      <span>{supporters} supporters</span>
    </div>
  </div>
);

export default Hero;
