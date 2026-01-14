import React from 'react'
import { FaBolt, FaCogs, FaUserFriends } from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import logo from "../assets/logo.png";
import Tilt from "react-parallax-tilt";
import featureImage from "../assets/features.png"

const Features = () => {

  const features = [
      {
        title: "Instant Payment Setup",
        desc: "Start receiving chai (payments) in seconds - no complicated setup.",
        icon: <FaBolt className="text-3xl sm:text-4xl text-[#fceee6]" />,
      },
      {
        title: "Custom Membership Options",
        desc: "Offer memberships with exclusive perks to your biggest supporters.",
        icon: <FaCogs className="text-3xl sm:text-4xl text-[#fceee6]" />,
      },
      {
        title: "Simple Dashboard",
        desc: "Manage payments, messages, and supporters in one clean place.",
        icon: <FaUserFriends className="text-3xl sm:text-4xl text-[#fceee6]" />,
      },
       {
        title: "Zero Monthly Fees",
        desc: "Keep more of what you earn. No hidden charges or subscriptions.",
        icon: <FaMoneyBill1Wave className="text-3xl sm:text-4xl text-[#fceee6]" />,
      },
    ];


  return (
    <section className='py-2 px-4 sm:px-8 bg-[#f5f1ee] text-center relative z-10 overflow-hidden'>

      {/* Sub-Heading */}
      <p className='text-xs text-gray-500 uppercase tracking-wide mb-2'>Creator-first platform</p>

      {/* Main Heading */}
      <h2 className='text-2xl sm:text-5xl font-extrabold text-chaiBrown mb-6'>Why Creators Love Us</h2>

      {/* Description */}
      <p className='text-xs sm:text-lg text-gray-600 max-w-2xl mx-auto mb-16 sm:mb-20 px-8 sm:px-0'>We built Ek Cup Chai to help creators grow, connect with fans, and earn without hassle. Here's what makes us special.</p>

      {/* Feature Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-20 gap-x-12 max-w-5xl mx-auto px-8 sm:px-0'>
        {features.map((feature, index) => (
          <Tilt
          key={index}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.03}
          transitionSpeed={800}
          className='w-full'
          >
          <div className='group bg-white border border-[#BB591C] rounded-xl p-6 pt-12 text-center space-y-3 transition-all duration-300 relative max-w-[500px] mx-auto'
          style={{
                boxShadow:
                  "rgba(187, 89, 28, 0.25) 0px 50px 100px -20px, rgba(187, 89, 28, 0.3) 0px 30px 60px -30px, rgba(187, 89, 28, 0.35) 0px -2px 6px 0px inset",
              }}
          >
            {/* Chai logo */}
            <img src={logo} alt="Logo" 
            className='absolute top-[8px] right-3 w-7 h-7 opacity-25 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none z-0'/>

            {/* Feature Icon */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#3e2723] rounded-full flex items-center justify-center shadow-lg z-10'>
              {feature.icon}
            </div>

            {/* Content */}
            <h3 className='text-lg font-bold text-chaiBrown mt-2 z-10 relative'>
              {feature.title}
            </h3>
            <p className='text-gray-600 text-sm z-10 realtive'>
              {feature.desc}
            </p>
          </div>
          </Tilt>
        ))}
      </div>

      <div className='mt-[-40px] sm:mt-[-60px] px-4 sm:px-0 max-w-6xl mx-auto'>
        <img src={featureImage} alt="why-creators-love-us" 
        className='w-[90%] max-w-[320px] sm:w-[70%] sm:max-w-[800px] sm:max-h-[700px] h-auto object-contain mb-[-60px] sm:mb-[-80px] mx-auto'/>
      </div>
    </section>
  )
}

export default Features
