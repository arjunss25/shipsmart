import React from 'react'

const Marquee = () => {
  return (
    <div className="w-full bg-white overflow-hidden pt-20 pb-30">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat the marquee content multiple times for seamless loop */}
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="flex items-center text-black font-medium text-[5rem]">
            <span className="px-4">ShipSmart AI</span>
            <div className="w-3 h-3 bg-[#FB3600] rounded-full mx-4"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee