import React from 'react'

const Ready = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 sm:p-6 md:p-8 lg:px-10 lg:pt-10 ">
      {/* Left Section - Orange Background with Question */}
      <div className="w-full lg:w-[30%] bg-[#FB3600] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh] rounded-[0.5rem] sm:rounded-[0.75rem] lg:rounded-[1rem]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center leading-tight">
          <span className="text-white">Ready to Make Your</span><br />
          <span className="text-[#525252]">Ship Smarter</span><span className='text-white'>?</span>
        </h1>
      </div>

      {/* Right Section - Ship Image with Overlay Cards */}
      <div className="w-full lg:w-[70%] relative min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh] rounded-[0.5rem] sm:rounded-[0.75rem] lg:rounded-[1rem] overflow-hidden">
        {/* Background Ship Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/ftrship-ain.png')`,
          }}
        >
        </div>

        {/* Overlay Cards */}
        <div className="relative h-full flex flex-col justify-center items-end p-3 sm:p-4 md:p-6 lg:p-8 space-y-2 sm:space-y-3 md:space-y-4">
          {/* Top Card - Orange */}
          <div className="bg-[#FB3600] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 w-[70%] sm:w-[65%] md:w-[60%] h-[12rem] sm:h-[13rem] md:h-[14rem] lg:h-[15rem] relative">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[2rem] mb-2 sm:mb-3 md:mb-4 leading-tight">
              AI-Powered Knowledge,<br />
              Onboard.
            </h3>
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center">
              <img src="/wt.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Bottom Card - White */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 w-[70%] sm:w-[65%] md:w-[60%] h-[12rem] sm:h-[13rem] md:h-[14rem] lg:h-[15rem] relative">
            <h3 className="text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-[2rem] mb-2 sm:mb-3 md:mb-4 leading-tight">
              Uninterrupted Support,<br />
              Any Voyage.
            </h3>
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center">
               <img src="/orng.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ready
