import React from 'react'
import Hero from './components/Hero'
import Tagline from './components/Tagline'
import AboutUs from './components/AboutUs'
import Parachute from './components/Parachute'
import ShipMoving from './components/ShipMoving'
import './App.css'
import Operations from './components/Operations'
import Ready from './components/Ready'
import Marquee from './components/Marquee'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Tagline/>
      <Parachute/>
      <Operations/>
      <ShipMoving/>
      <Ready/>
      <Marquee />
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App