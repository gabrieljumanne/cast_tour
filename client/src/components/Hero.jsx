import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'


const Hero = () => {
  
  const [bgImage,setBgImage] = useState("")

  useEffect(()=>{

    // fetch random bg image from API
    fetchImages()
  }, [])

  const fetchImages = () => {

  }

  return (
    <header className='relative overflow-hidden h-[500px] bg-gray-500'>
        <div className='absolute insert-0 overflow-hidden'>
            <motion.img 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1.5}}
              src={bgImage}
              alt=''
              className='h-full w-full object-cover object-center '
            />
        </div> 
          <div className='absolute insert-0 bg-black/40 '>
            
          </div> 
          <div className='container relative mx-auto h-full text-white'>
              <div className='items-center h-full pt-8 md:pt-0 md:flex'>
                  <div className='w-full px-6 py-8 md:py-24 md:w-1/2 md:max-w-[600px]'>
                      <h2 className='mb-8 text-4xl font-bold tracking-normal md:text-6xl '>
                        Discover the Beauty of <br /> Our Country
                      </h2>
                      <p className='mb-8 text-xl md:text-2xl '>
                            Check Out The Most Popular Travel Destinations. Customizable Tour Packages Available. Start Your Adventure Today!

                      </p>
                      <button
                        className='rounded bg-pink-700 px-8 py-3 font-bold text-white shadow hover:bg-pink-500'
                      >
                        Book Your Trip Now
                      </button>
                  </div>
              </div>

          </div>
    </header>
  )
}

export default Hero