import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ShipMoving = () => {
  const sectionRef = useRef(null)
  const shipRef = useRef(null)
  const initialTextRef = useRef(null)
  const newTextRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const ship = shipRef.current
    const initialText = initialTextRef.current
    const newText = newTextRef.current

    if (!section || !ship || !initialText || !newText) return

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=3000', // Scroll distance for animation
        scrub: 1, // Smooth scrubbing effect
        pin: true, // Pin the section while animating
        anticipatePin: 1,
      }
    })

    // Set initial positions
    gsap.set(ship, {
      xPercent: 100,
      opacity: 0
    })

    gsap.set(initialText, {
      opacity: 1,
      scale: 1
    })

    gsap.set(newText, {
      opacity: 0,
      scale: 1.05
    })

    // Animate the sequence
    tl
      // Fade in ship
      .to(ship, {
        opacity: 1,
        duration: 0.1,
        ease: 'none'
      }, 0)
      // Move ship from right to left
      .to(ship, {
        xPercent: -100,
        duration: 1,
        ease: 'none'
      }, 0)
      // Fade out initial text
      .to(initialText, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: 'power2.inOut'
      }, 0.4)
      // Fade in new text
      .to(newText, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.inOut'
      }, 0.5)
      // Fade out ship
      .to(ship, {
        opacity: 0,
        duration: 0.1,
        ease: 'none'
      }, 0.9)

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Initial Text */}
        <div
          ref={initialTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-8"
        >
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[5rem] font-medium text-center leading-tight">
            The Only AI That Sails With You.100% Local, 100% Reliable.
          </h1>
        </div>

        {/* New Text */}
        <div
          ref={newTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 sm:px-6 md:px-8"
        >
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[5rem] font-medium text-center leading-tight">
            Troubleshoot with <span className='text-[#FB3600]'>Confidence</span>.Resolve Issues <span className='text-[#FB3600]'>Instantly</span>
          </h1>
        </div>

        {/* Animated Ship */}
        <div
          ref={shipRef}
          className="z-30 will-change-transform"
        >
          <img 
            src="/ship.png" 
            alt="Ship sailing" 
            className="w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[150rem] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default ShipMoving
