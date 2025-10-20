import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-[30vh]">
      <div className="max-w-7xl mx-auto">
        {/* Logo/Brand Name */}
        <div className="text-center mb-8">
          <h2 className="text-[10rem] text-gray-200">
            ShipSmart Ai
          </h2>
        </div>

        {/* Bottom Row - Contact, Copyright, Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Left Section - Contact Information */}
          <div className="text-red-600 text-sm font-medium order-1 sm:order-1">
            info@shipsmart.ai | 9567675554
          </div>

          {/* Center Section - Copyright */}
          <div className="text-red-600 text-sm font-medium order-2 sm:order-2 text-center">
            Copyright © 2025 shipsmart.ai. All rights reserved.
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="flex items-center gap-4 order-3 sm:order-3">
            <a href="#" aria-label="LinkedIn" className="text-[#FB3600] hover:text-[#E03E00] transition-colors">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" aria-label="Facebook" className="text-[#FB3600] hover:text-[#E03E00] transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-[#FB3600] hover:text-[#E03E00] transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="X" className="text-[#FB3600] hover:text-[#E03E00] transition-colors">
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer