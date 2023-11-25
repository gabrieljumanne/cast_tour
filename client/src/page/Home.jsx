import React from 'react'
import { ThemeProvider } from "../contexts/ThemeContext"

import {
  Activities,
  Cta,
  Destination,
  Footer,
  Hero,
  NavBar,
  Testimonials,
  TravelTips,
} from "../components";

const Home = () => {
  return (
    
      <ThemeProvider>
        <NavBar />
        <Hero />
        <Destination />
        <Cta />
        <Activities />
        <TravelTips />
        <Testimonials />
        <Footer />
      </ThemeProvider>
    

  )
}

export default Home