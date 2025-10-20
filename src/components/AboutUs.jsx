import React from 'react'

const AboutUs = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl  leading-none">
              What Is<br />
              <span className="text-orange-500">ShipSmart AI?</span>
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-base text-gray-700 leading-relaxed">
              ShipSmart AI is a plug-and-play smart box that works as your 
              ship's intelligent assistant. Simply connect it to your ship's local 
              area network (LAN) and access it from any computer onboard. 
              The system understands your ship's manuals, operating procedures, 
              and PMS documentation — allowing the crew to ask questions and 
              get step-by-step guidance instantly.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Works Entirely Offline */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300 h-[40vh]">
            <img 
              src="/Group 61.png" 
              alt="Ship crew working" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-white">
                <div className="text-2xl">Works Entirely</div>
                <div className="text-2xl text-orange-500">Offline</div>
              </div>
            </div>
          </div>

          {/* Card 2 - Instant Access to Critical Knowledge */}
          <div className="relative rounded-2xl overflow-hidden group duration-300 h-[40vh]">
            <img 
              src="/Group 61 (1).png" 
              alt="Ship crew on bridge" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-white">
                <div className="text-2xl ">Instant Access to</div>
                <div className="text-2xl text-orange-500">Critical Knowledge</div>
              </div>
            </div>
          </div>

          {/* Card 3 - Data Protection and Privacy Control */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300 h-[40vh]">
            <img 
              src="/Group 61 (2).png" 
              alt="Ship crew monitoring systems" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-white">
                <div className="text-2xl">Data Protection</div>
                <div className="text-2xl">and <span className="text-orange-500">Privacy Control</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
