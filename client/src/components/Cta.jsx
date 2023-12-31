import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../hooks/useTheme';

import {fadeIn, staggerContainer,textContainer,textVariant, textVariant2, boxVariants} from '../utility/motion'


const Cta = () => {
  const [darkTheme, toggleTheme] = useTheme();

  const [ref, inView] = useInView(
    {
      triggerOnce:false,
      threshold:0.5,
    }
  )

  // Simulated data for the CTA section
  const ctaText = "Ready For Your Next Adventure?";
  const ctaDescription =
    "Our travel experts can help you craft the perfect customized vacation package. Contact us today to start planning your dream getaway?";

  return (
    <motion.section

      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView? 'visible': 'hidden'}
      variants={boxVariants}
      whileInView={{opacity:1, y:0}}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={`${darkTheme? 'bg-[#1a1a1a] text-white':'text-black bg-white'} pt-[30px] mb-[0px] `}
    >
      <div className={`mx-auto ${darkTheme? 'bg-[#262626] ': 'border-[1px] md:border-black/40'} relative h-[300px]  max-w-7xl rounded pg-12 px-6 lg:flex lg:items-center lg:py-24 lg:px-8`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:w-0 lg:flex-1"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-[30px]">
            {ctaText}
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-6 ">
            {ctaDescription}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 lg:mt-0 lg:ml-8"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`block w-full ${darkTheme? '': 'text-white'} bg-pink-700 rounded-md px-5 py-3 text-base font-medium font-bold shadow shadow hover:bg-pink-500 focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600`}
            href="#"
          >
            Contact Sale
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Cta;
