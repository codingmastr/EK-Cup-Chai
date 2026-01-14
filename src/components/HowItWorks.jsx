import React from "react";
import { FaUserEdit, FaShareAlt, FaCoffee } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import logo from "../assets/logo.png";
import workImage from "../assets/work.png";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create your chai page",
      desc: "Set up your profile with a photo, bio & set your chai price.",
      icon: <FaUserEdit className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
    {
      title: "Share with your fans",
      desc: "Send your custom page link to your audience and community.",
      icon: <FaShareAlt className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
    {
      title: "Get chai love & grow",
      desc: "Receive chai (payments) and build a loyal supporter base.",
      icon: <FaCoffee className="text-3xl sm:text-4xl text-[#fceee6]" />,
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-8 bg-[#f5f1ee] text-center relative z-10 overflow-hidden">
      {/* Sub-heading */}
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
        Easy as chai
      </p>

      {/* Main heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-chaiBrown mb-6">
        How It Works
      </h2>

      {/* Description */}
      <p className="text-xs sm:text-lg text-gray-600 max-w-2xl mx-auto mb-16 sm:mb-20 px-8 sm:px-0">
        Ek Cup Chai makes supporting creators fun and effortless. In just a few
        taps, your fans can send chai and show their appreciation.
      </p>

      {/* Steps Timeline */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-14 md:gap-10 max-w-6xl mx-auto relative z-20">
        {steps.map((step, i) => (
          <div key={i} className="relative w-full max-w-[280px] mx-auto">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.03}
              transitionSpeed={800}
              className="w-full"
            >
              <div
                className="group bg-white border border-[#BB591C] rounded-xl p-6 pt-12 text-center space-y-3 shadow-[0_50px_80px_-10px_rgba(187,89,28,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(187,89,28,0.2)] transition-all duration-300 relative"
                style={{
                  boxShadow:
                    "rgba(187, 89, 28, 0.25) 0px 50px 100px -20px, rgba(187, 89, 28, 0.3) 0px 30px 60px -30px, rgba(187, 89, 28, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  className="absolute bottom-[-1px] right-3 w-7 h-7 opacity-25 group-hover:opacity-50 pointer-events-none z-0"
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#3e2723] rounded-full flex items-center justify-center shadow-lg z-10">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-chaiBrown mt-2 z-10 relative">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm z-10 relative">
                  {step.desc}
                </p>
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      {/* Responsive Image Section */}
      <div className="mt-5 px-2 sm:px-0 max-w-4xl mx-auto">
        <img src={workImage} alt="how-it-works" className="w-full h-auto"/>
      </div>
    </section>
  );
};

export default HowItWorks;
