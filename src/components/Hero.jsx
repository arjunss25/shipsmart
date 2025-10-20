import React from 'react'
import Navbar from './Navbar'
import { BsArrowUpLeftCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Navbar inside the hero so it scrolls with the section */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navbar />
      </div>
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        className='absolute top-0 left-0 w-full h-full object-cover -z-10'
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>
      
      {/* Optional: Dark overlay for better text readability */}
      <div className="absolute inset-0  -z-5"></div>
      
      {/* Content Container - Add your content here */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full text-white p-6 pt-24 lg:p-10 lg:pt-24">
        {/* left-section */}
      <div className="left-section w-full lg:w-[50vw] h-auto lg:h-full">
        <div className="main-sec flex flex-col justify-center gap-4 w-full lg:w-[90%] h-full">
          <h1 className='text-3xl sm:text-4xl lg:text-[4.5rem] text-white leading-none font-medium'>Empower Your Crew with Instant Knowledge</h1>

         <h2 className='text-xl sm:text-2xl lg:text-[2rem] italic text-[#FB3600]'>Without Internet</h2>

         <button className='bg-[#FB3600] w-fit text-white px-4 py-2 flex items-center gap-2 text-sm sm:text-base'>Request A Demo <BsArrowUpLeftCircle className='text-white text-xl rotate-90' /></button>
        </div>
      </div>

      {/* right-section */}
      <div className="right-section w-full lg:w-[50vw] h-auto lg:h-full flex flex-col justify-center text-base sm:text-xl lg:text-[2rem] mt-8 lg:mt-0">
        <div className="text-left lg:pl-8 leading-none space-y-2 flex flex-col items-start lg:items-center">
          <div className="text-content-main font-medium">
          <h1 className='text-2xl sm:text-3xl lg:text-[3rem]'>No cloud.</h1>
          <h1 className='text-2xl sm:text-3xl lg:text-[3rem]'>No risk.</h1>
          <h1 className='text-2xl sm:text-3xl lg:text-[3rem]'><span className='text-[#FB3600]'>100%</span> onboard</h1>
          </div>
        </div>
        <div className="mt-6 flex justify-start lg:justify-end">
          <p className='text-base sm:text-lg lg:text-[1.5rem] font-light text-left lg:text-right max-w-full lg:max-w-[90%]'>An Intelligent Onboard Assistant — Built by Marine Engineers, for Marine Engineers.</p>
        </div>
      </div>

      
      </div>

      
    </div>
  )
}

export default Hero
