import React, { useState } from 'react'
import { BsArrowUpLeftCircle } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full">
        <div className="main flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <div className="logo">
                <h1 className="text-2xl font-bold text-white">SHIP</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="navlinks-sec hidden lg:flex items-center space-x-10">
                <a href="#home" className="text-white hover:text-[#FB3600] transition-colors duration-200 font-medium">
                    Home
                </a>
                <a href="#about" className="text-white hover:text-[#FB3600] transition-colors duration-200 font-medium">
                    About
                </a>
                <a href="#features" className="text-white hover:text-[#FB3600] transition-colors duration-200 font-medium">
                    Features
                </a>
                <button className='bg-[#FB3600] w-fit text-white px-4 py-2 flex items-center gap-2 hover:bg-[#e63000] transition-colors duration-200'>
                    Get In Touch
                    <BsArrowUpLeftCircle className='text-white text-xl rotate-90' />
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMenu}
                className="lg:hidden text-white text-3xl z-50 transition-transform duration-300 hover:scale-110"
                aria-label="Toggle menu"
            >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
        </div>

        {/* Mobile Menu - slides from top */}
        <div 
            className={`lg:hidden fixed top-0 left-0 h-screen w-full bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-40 ${
                isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="flex flex-col items-start justify-start h-full px-8 pt-28 space-y-8">
                <a 
                    href="#home" 
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-[#FB3600] transition-colors duration-200 font-medium"
                >
                    Home
                </a>
                <a 
                    href="#about" 
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-[#FB3600] transition-colors duration-200 font-medium"
                >
                    About
                </a>
                <a 
                    href="#features" 
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-[#FB3600] transition-colors duration-200 font-medium"
                >
                    Features
                </a>
                <button 
                    onClick={toggleMenu}
                    className='bg-[#FB3600] w-fit text-white px-6 py-3 flex items-center gap-2 hover:bg-[#e63000] transition-colors duration-200 text-lg'
                >
                    Get In Touch
                    <BsArrowUpLeftCircle className='text-white text-xl rotate-90' />
                </button>
            </div>
        </div>

        {/* Overlay */}
        {isOpen && (
            <div 
                onClick={toggleMenu}
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            ></div>
        )}
    </nav>
  )
}

export default Navbar
