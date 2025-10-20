import React from 'react'

const Operations = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white px-4 py-8 md:py-12 lg:py-16">
      <div className="mx-auto w-full space-y-12 md:space-y-16 lg:space-y-20 px-4 sm:px-8 md:px-12 lg:px-20">
        
        {/* Main Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-[20vh] w-full flex justify-center">
          <h1 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] leading-tight lg:leading-none w-full sm:w-[85%] md:w-[75%] lg:w-[60%]">
            <span className="text-[#FB3600]">Smart AI</span> That Understands <span className="text-[#FB3600]">Marine</span> Operations
          </h1>
        </div>
        
        {/* Section 1: Instant Answers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-1 space-y-2 text-center md:text-left">
            <h2 className="text-white text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-light leading-tight">
              <span className='text-[#535353]'>Instant Answers,</span><br/>Seamless Operations<br/>Right Where You Sail
            </h2>
          </div>
          <div className="lg:col-span-1 order-last md:order-none">
            <div className="relative group">
              <img 
                src="/dt1.png" 
                alt="Engineer with tablet" 
                className="w-[12rem] sm:w-[13rem] md:w-[14rem] lg:w-[15rem] h-auto object-cover mx-auto"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300">
                <img 
                  src="/Forward Button.png" 
                  alt="Forward button" 
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 cursor-pointer"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/dt2.png" 
                  alt="Engineer with tablet hover" 
                  className="w-[12rem] sm:w-[13rem] md:w-[14rem] lg:w-[15rem] h-auto object-cover mx-auto rotate-12 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
            <p className="text-[#6A6A6A] text-[0.95rem] sm:text-[1rem] leading-relaxed">
              ShipSmart AI acts as a real-time knowledge partner for the crew, providing instant answers and technical guidance for any machinery, maintenance, or safety operation
            </p>
          </div>
        </div>

        {/* Section 2: Trained on Your Manuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-1 space-y-2 text-center md:text-left">
            <h2 className="text-white text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-light leading-tight">
              <span className='text-[#535353]'>Trained on Your</span> Manuals, SOPs, and
              Checklists
            </h2>
          </div>
          <div className="lg:col-span-1 order-last md:order-none">
            <div className="relative group">
              <img 
                src="/trained.png" 
                alt="Control room crew" 
                className="w-[12rem] sm:w-[13rem] md:w-[14rem] lg:w-[15rem] h-auto object-cover mx-auto"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300">
                <img 
                  src="/Forward Button.png" 
                  alt="Forward button" 
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 cursor-pointer"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/trained2.png" 
                  alt="Trained crew" 
                  className="w-[12rem] sm:w-[13rem] md:w-[14rem] lg:w-[15rem] h-auto object-cover mx-auto rotate-12 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
            <p className="text-[#6A6A6A] text-[0.95rem] sm:text-[1rem] leading-relaxed">
              This system understands your vessel's
              systems and procedures, offering context-
              based assistance for troubleshooting,
              operations, and maintenance tasks with engineer-level precision.
            </p>
          </div>
        </div>

        {/* Section 3: Empowering Marine Engineers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-1 space-y-2 text-center md:text-left">
            <h2 className="text-white text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-light leading-tight">
              <span className='text-[#535353]'>Empowering Marine Engineers</span> Through Guided Learning Assistance
            </h2>
          </div>
          <div className="lg:col-span-1 order-last md:order-none">
            <div className="relative group">
              <img 
                src="/tr1.png" 
                alt="Marine engineers learning" 
                className="w-[12rem] sm:w-[13rem] md:w-[14rem] lg:w-[15rem] h-auto object-cover mx-auto"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300">
                <img 
                  src="/Forward Button.png" 
                  alt="Forward button" 
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 cursor-pointer"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/tr2.png" 
                  alt="Marine engineers learning hover" 
                  className="w-[12rem] sm:w-[13rem] md:w-[14rem] lg:w-[15rem] h-auto object-cover mx-auto rotate-12 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
            <p className="text-[#6A6A6A] text-[0.95rem] sm:text-[1rem] leading-relaxed">
              Interactive learning and real-time operational support help cadets and officers build confidence, test knowledge, and apply correct procedures during daily ship operations.
            </p>
          </div>
        </div>

        {/* Section 4: Offline Encrypted Controlled */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-1 space-y-2 text-center md:text-left">
            <h2 className="text-white text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-light leading-tight">
              <span className='text-[#535353]'>Offline. Encrypted. Controlled</span> Designed for Maritime Environments
            </h2>
          </div>
          <div className="lg:col-span-1 order-last md:order-none">
            <div className="relative group">
              <img 
                src="/fr1.png" 
                alt="Server rack" 
                className="w-[12rem] sm:w-[13rem] md:w-[14rem] lg:w-[15rem] h-auto object-cover mx-auto"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300">
                <img 
                  src="/Forward Button.png" 
                  alt="Forward button" 
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 cursor-pointer"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/fr2.png" 
                  alt="Server rack hover" 
                  className="w-[12rem] sm:w-[13rem] md:w-[14rem] lg:w-[15rem] h-auto object-cover mx-auto rotate-12 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
            <p className="text-[#6A6A6A] text-[0.95rem] sm:text-[1rem] leading-relaxed">
              ShipSmart AI operates entirely within the ship's LAN. All data stays onboard, protected ensuring operational safety and data confidentiality.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Operations
