import React from 'react'
import publishImage from "../assets/publish.png"

const Publish = () => {
  return (
    <section className='bg-[#f5f1ee] py-2 px-6 sm:px-12 text-center'>

      {/* Sub-Heading */}
      <p className='uppercase text-xs tracking-widest text-gray-500 mb-2 font-semibold'>Content, Audio & Stories</p>

      {/* Main Heading */}
     <h2 className='text-3xl sm:text-5xl font-extrabold text-chaiBrown mb-4'>Start Publishing</h2>

     {/* Description */}
     <p className='max-w-2xl mx-auto text-gray-600 text-xs px-8 sm:text-lg mb-8'>Ek Cup Chai helps creators publish authentic stories, behind-the-scenes moments, music, and more. Connect with the real you.</p>

     {/* Final Image */}
     <div className='max-w-[730px] mx-auto'>
      <img src={publishImage} alt="Publish Content Overview" className='w-full h-auto rounded-xl'/>
     </div>
    </section>
  )
}

export default Publish
