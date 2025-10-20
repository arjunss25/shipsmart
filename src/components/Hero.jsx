import React from 'react'
import Navbar from './Navbar'
import { BsArrowUpLeftCircle } from "react-icons/bs";
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Animation variants for text elements
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smooth motion
      }
    }
  };

  // Animation for button with hover effect
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Right section animations
  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

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
        <motion.div 
          className="left-section w-full lg:w-[50vw] h-auto lg:h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="main-sec flex flex-col justify-center gap-4 w-full lg:w-[90%] h-full">
            <motion.h1 
              className='text-3xl sm:text-4xl lg:text-[4.5rem] text-white leading-none font-medium'
              variants={fadeInUp}
            >
              Empower Your Crew with Instant Knowledge
            </motion.h1>

            <motion.h2 
              className='text-xl sm:text-2xl lg:text-[2rem] italic text-[#FB3600]'
              variants={fadeInUp}
            >
              Without Internet
            </motion.h2>

            <motion.button 
              className='bg-[#FB3600] w-fit text-white px-4 py-2 flex items-center gap-2 text-sm sm:text-base'
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(251, 54, 0, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              Request A Demo <BsArrowUpLeftCircle className='text-white text-xl rotate-90' />
            </motion.button>
          </div>
        </motion.div>

        {/* right-section */}
        <motion.div 
          className="right-section w-full lg:w-[50vw] h-auto lg:h-full flex flex-col justify-center text-base sm:text-xl lg:text-[2rem] mt-8 lg:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-left lg:pl-8 leading-none space-y-2 flex flex-col items-start lg:items-center">
            <motion.div 
              className="text-content-main font-medium"
              variants={slideInRight}
            >
              <motion.h1 
                className='text-2xl sm:text-3xl lg:text-[3rem]'
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                No cloud.
              </motion.h1>
              <motion.h1 
                className='text-2xl sm:text-3xl lg:text-[3rem]'
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                No risk.
              </motion.h1>
              <motion.h1 
                className='text-2xl sm:text-3xl lg:text-[3rem]'
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <span className='text-[#FB3600]'>100%</span> onboard
              </motion.h1>
            </motion.div>
          </div>
          <motion.div 
            className="mt-6 flex justify-start lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          >
            <p className='text-base sm:text-lg lg:text-[1.5rem] font-light text-left lg:text-right max-w-full lg:max-w-[90%]'>
              An Intelligent Onboard Assistant — Built by Marine Engineers, for Marine Engineers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
