import React from 'react'
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
    <div>
      <NavBar />
      <Hero />
      <Cta />
      <Activities />
      <TravelTips />
      <Testimonials />
      <Footer />
    </div>

  )
}

export default Home