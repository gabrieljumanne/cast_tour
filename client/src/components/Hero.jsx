import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {textVariants, containerVariants, text} from '../utility'
import { useInView } from 'react-intersection-observer';
import {fadeIn, staggerContainer,textContainer,textVariant, textVariant2} from '../utility/motion'
import {useTheme} from '../hooks/useTheme';


const Hero = () => {
  const [bgImage, setBgImage] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Discover the Beauty of our country", "Choose Your Destination", "Select Dates", "Pick Number of People"];
  const [isMemberDropdownOpen, setIsMemberDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [darkTheme, toggleTheme] = useTheme();
  const [input, setInput] = useState('Where do you want to go?');
  const [listVisible, setListVisible] =useState(false)

  const themClasses = darkTheme ? 'bg-[#1a1a1a] text-white' : 'text-black';

  const [ref, inView] = useInView(
    {
      triggerOnce:false,
      threshold:0.5,
    }
  )

  useEffect(() => {
    // Fetch random background image from API
    fetchImages();
    // Start animating text after component mounts
    const interval = setInterval(animateText, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchImages = () => {
    // Fetch images logic goes here
  };

  const animateText = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handleMembersDropdown = () => {
    setIsMemberDropdownOpen(!isMemberDropdownOpen);
  };

  const handleAdultsChange = (e) => {
    setAdults(Number(e.target.value));
  };

  const handleChildrenChange = (e) => {
    setChildren(Number(e.target.value));
  };

  const handleCloseDropdown = () => {
    setIsMemberDropdownOpen(false);
  };

  const handleListVisible =()=>{

  }

  // Placeholder data for destination and members dropdown
  const destinations = ["Serengeti National Park", "Great Barrier Reef", "Machu Picchu"];

  return (
    <header className={`relative overflow-hidden pb-[20px] h-[500px] w-full bottom-0 ${themClasses} `}>
      <div className={`absolute w-full inset-0 overflow-hidden`}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={bgImage}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className={`absolute inset-0 ${darkTheme?'bg-[#1a1a1a]':' border-b'} `}></div>
      <div className=" relative w-full text-white">

        <div className="items-center h-full md:w-full pt-8 md:pt-0 md:flex md:justify-center">

          <div className="w-full px-6 py-8 md:py-24 md:w-[90%] md:max-w-full relative">
            <motion.div

              ref={ref}
              variants={textContainer}
              initial="hidden"
              animate={inView? 'visible' : 'hidden'}
              className={`${darkTheme?'bg-transparent':'text-black'} md:w-[60%]`}
              whileInView={{opacity:1, y:0}}
            >
              {text.split('').map((char, index) => (
                <motion.span key={index} variants={fadeIn('right', 'spring', index*0.2,0.2)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  whileInView='show'
                  className={`${darkTheme?'bg-transparent':''} mb-8 text-4xl font-bold tracking-normal md:text-6xl`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className={`${darkTheme?'':'text-black'}`}
            >
              {texts[textIndex]}
              {/* "Discover the Beauty of our country" */}
            </motion.p>
            <div className={`md:absolute rounded top-0 right-0 mt-[10%] mb-[10px] mr-6 flex flex-col ${darkTheme?'bg-[#262626] border-[1px] border-[#262626] text-white':' border-[1px] border-[#262626] text-black shadow'} `}>
              {/* Destination dropdown */}
              <input type="text" readOnly className={`${darkTheme?'bg-[#262626] hover:bg-[#333333]':'bg-white hover:bg-[#e6e6e6]'} p-2 mb-4 cursor-pointer outline-none`} 
                value={input}
                onClick={()=>{setListVisible(!listVisible)}}
              />

              <ul
                className={`bg-[#1a1a1a] md:w-[320px] md:top-[30%] z-10 ${listVisible?'block':'hidden'} ${darkTheme?'bg-[#1a1a1a] text-white':'bg-white text-black border-[#1a1a1a]'} right-0 md:max-w-[264px] absolute`}
              >
                {destinations.map((destination)=>(
                  <li className='mb-[20px] py-[10px] px-[10px] border-b border-[#333333] cursor-pointer'
                    onClick={()=>{
                      setInput(destination)
                      setListVisible(!listVisible)
                    }}
                  >{destination}</li>
                ))}
              </ul>
              
              {/* Date picker */}
              <input type="date" id="dates" className={`${darkTheme?'bg-[#262626] hover:bg-[#333333]':'bg-white hover:bg-[#e6e6e6]'} rounded p-2 mb-4 cursor-pointer outline-none`} />
              {/* Members dropdown */}
              <div className="relative">
                <button onClick={handleMembersDropdown} className={`${darkTheme?'ml-[10px] mb-[10px]':' mb-[10px] ml-[10px]'} bg-pink-700 font-bold text-white shadow rounded p-2 hover:bg-pink-500`}>
                  Members..
                </button>
                {isMemberDropdownOpen && (
                  <div className={`absolute top-full lg:right-0 ${darkTheme?'bg-[#1a1a1a] text-white':'bg-white text-black'} rounded p-4 border border-gray-300`}>
                    <div className="flex items-center mb-2">
                      <label htmlFor="adults" className="mr-2">Adults:</label>
                      <input type="number" id="adults" value={adults} onChange={handleAdultsChange} min={1} 
                        className={`outline-none ${darkTheme?'bg-[#333333]':''}`}
                      />
                    </div>
                    <div className="flex items-center">
                      <label htmlFor="children" className="mr-2">Children:</label>
                      <input type="number" id="children" value={children} onChange={handleChildrenChange} min={0} 
                        className={`outline-none ${darkTheme?'bg-[#333333]':''}`}
                      />
                    </div>
                    <button onClick={handleCloseDropdown} className="mt-2 bg-pink-700 font-bold text-white shadow hover:bg-pink-500 text-white rounded px-4 py-2">
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* Check Tickets button */}
            <button className="rounded bg-pink-700 px-8 py-3 font-bold text-white shadow hover:bg-pink-500">
              Check Tickets
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
