import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#f5f1ee] py-20 px-6 sm:px-12 text-center">
      {/* Sub-Heading */}
      <p className="uppercase text-xs tracking-widest text-gray-500 mb-2 font-semibold">
        Start Your Journey
      </p>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-chaiBrown mb-4">
        Get Support
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 text-xs px-8 sm:text-lg mb-8">
        Join thousands of creators using Ek Cup Chai to grow their audience, connect deeply, and get meaningful support.
      </p>

      {/* CTA Button */}
      <a href="/signup" className="inline-block bg-chaiBrown text-white font-bold text-lg sm:text-xl px-10 sm:px-12 py-4 sm:py-5 rounded-full border-2 border-[#BB591C]
      shadow-[7px_5px_56px_-20px_#BB591C] transition-transform transform hover:scale-105 duration-300">
      Create Your Page Now
      </a>
    </section>
  );
};

export default CallToAction;
