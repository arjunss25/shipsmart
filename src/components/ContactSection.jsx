import React from 'react'
import { IoMdPaperPlane } from "react-icons/io";

const ContactSection = () => {
  return (
    <section className='w-full mb-8'>
      <div className="main min-h-[60vh] lg:h-[60vh] bg-gradient-to-r from-black to-[#FB3600] flex flex-col lg:flex-row relative">
      <div className="left w-full lg:w-[50vw] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className='text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-none text-white p-4 sm:p-6 lg:p-10'>Connect With<br/>Us</h1>
          <img src="/contact-arrow.png" alt="" className="w-16 sm:w-20 lg:w-auto" />
      </div>

      <div className="right w-full lg:w-[50vw] p-4 sm:p-6 lg:p-10">
        <div className="box-section w-full lg:w-[90%] bg-[#F5F5F5] p-4 sm:p-6 lg:p-8 rounded-lg">
          {/* Header Section */}
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-black mb-2 sm:mb-3">Get in Touch</h2>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
              please fill out the form below and we will get back to you as soon as possible
            </p>
            <div className="w-full h-px bg-gray-300 mb-3 sm:mb-4"></div>
          </div>

          {/* Form Section */}
          <form className="space-y-3 sm:space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-black font-medium text-xs sm:text-sm mb-1">Name</label>
              <input 
                type="text" 
                className="w-full h-8 sm:h-10 bg-[#EEEEEE] rounded-md px-2 sm:px-3 border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs sm:text-sm"
                placeholder=""
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-black font-medium text-xs sm:text-sm mb-1">Email</label>
              <input 
                type="email" 
                className="w-full h-8 sm:h-10 bg-[#EEEEEE] rounded-md px-2 sm:px-3 border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs sm:text-sm"
                placeholder=""
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-black font-medium text-xs sm:text-sm mb-1">Phone</label>
              <input 
                type="tel" 
                className="w-full h-8 sm:h-10 bg-[#EEEEEE] rounded-md px-2 sm:px-3 border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs sm:text-sm"
                placeholder=""
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-black font-medium text-xs sm:text-sm mb-1">Message</label>
              <textarea 
                rows="2"
                className="w-full bg-[#EEEEEE] rounded-md px-2 sm:px-3 py-1 sm:py-2 border-none focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-xs sm:text-sm"
                placeholder=""
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center sm:justify-end mt-4 sm:mt-6">
              <button 
                type="submit"
                className="bg-[#FF4500] text-white text-sm sm:text-base px-4 sm:px-6 py-1.5 sm:py-2 rounded-md flex items-center gap-1 sm:gap-2 hover:bg-[#E03E00] transition-colors w-full sm:w-auto justify-center"
              >
                Send
                <IoMdPaperPlane className='text-[1rem] sm:text-[1.2rem]'/>
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ContactSection