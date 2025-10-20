import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  // Animation variants for fade in from bottom
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Animation variants for fade in from left
  const fadeInLeft = {
    hidden: { 
      opacity: 0, 
      x: -60 
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

  // Animation variants for fade in from right
  const fadeInRight = {
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

  // Container for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <h2 className="text-5xl md:text-6xl  leading-none">
              What Is<br />
              <span className="text-orange-500">ShipSmart AI?</span>
            </h2>
          </motion.div>
          <motion.div 
            className="flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <p className="text-base text-gray-700 leading-relaxed">
              ShipSmart AI is a plug-and-play smart box that works as your 
              ship's intelligent assistant. Simply connect it to your ship's local 
              area network (LAN) and access it from any computer onboard. 
              The system understands your ship's manuals, operating procedures, 
              and PMS documentation — allowing the crew to ask questions and 
              get step-by-step guidance instantly.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Card 1 - Works Entirely Offline */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-lg group h-[40vh]"
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img 
              src="/Group 61.png" 
              alt="Ship crew working" 
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="text-white">
                <div className="text-2xl">Works Entirely</div>
                <div className="text-2xl text-orange-500">Offline</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2 - Instant Access to Critical Knowledge */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-lg group h-[40vh]"
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img 
              src="/Group 61 (1).png" 
              alt="Ship crew on bridge" 
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-white">
                <div className="text-2xl ">Instant Access to</div>
                <div className="text-2xl text-orange-500">Critical Knowledge</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 3 - Data Protection and Privacy Control */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-lg group h-[40vh]"
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img 
              src="/Group 61 (2).png" 
              alt="Ship crew monitoring systems" 
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="text-white">
                <div className="text-2xl">Data Protection</div>
                <div className="text-2xl">and <span className="text-orange-500">Privacy Control</span></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
