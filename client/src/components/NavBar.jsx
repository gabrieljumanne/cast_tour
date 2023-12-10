// Navbar.jsx

import { useState } from 'react'

import {useTheme} from '../hooks/useTheme';


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const [darkTheme, toggleTheme] = useTheme();

  const themClasses = darkTheme ? 'bg-[#1a1a1a] text-white' : 'bg-white text-black';

  return (
    <nav className={`shadow-lg ${themClasses}`}>



      <div className={`container px-6 py-4 mx-auto md:max-w-full md:flex md:justify-between md:items-center ${darkTheme? 'rounded bg-[#1a1a1a]':''}`}>

        <div className="flex items-center justify-between">
          <div>
            <a className="text-xl font-bold text-primary-500 md:text-2xl" href="/">
              Brand
            </a>  
          </div>
  
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>


        {/* //transparent */}
        <div 
        className={`absolute ${darkTheme?'bg-[#1a1a1a] text-white':'text-black shadow-lg bg-white'} top-[60px] h-[220px] w-[200px] px-[20px] z-10 origin-top-right transition-all duration-300 
        ${isOpen ? 'right-0' : '-right-full'}
        `}>
        
        <ul
          className={`${darkTheme?'bg-[#262626] text-white':''} h-[200px] rounded pl-[5px] py-[10px]`}
        >
          <li
            className='mb-[10px] border-b border-[#333333] mt-[10px]'
          ><a href="/">Home</a></li>
          <li className='mb-[10px] border-b border-[#333333]'><a href="/destinations">Destinations</a></li>
          <li className='mb-[10px] border-b border-[#333333]'><a href="/tours">Tours</a></li>
          <li className='mb-[10px] border-b border-[#333333]'><a href="/customizable">Packages</a></li>
          <li className='mb-[10px] border-b border-[#333333]'><a onClick={toggleTheme}>Dark</a></li>        
        </ul>
      
      </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div className='flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden'>
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">

          <li className="text-xl font-medium hover:text-primary-600">
              <button
                onClick={toggleTheme}
              >Dark</button>
            </li>
            <li className="text-xl font-medium hover:text-primary-600">
              <a href="/">Home</a>
            </li>
  
            <li className="text-xl font-medium hover:text-primary-600">
              <a href="/destinations">Destinations</a>
            </li>

            <li className="text-xl font-medium hover:text-primary-600">
              <a href="/tours">Tours</a>
            </li>

            <li className="text-xl font-medium hover:text-primary-600">
              <a href="/customizable">Packages</a>
            </li>

            <li className="text-xl font-medium hover:text-primary-600">
              <a href="/hotel">Hotel</a>
            </li>
          </ul>
        </div>
  
        <div className="hidden space-x-2 md:inline-block">
          <a className="px-4 py-2 text-base font-medium text-center transition bg-pink-700 font-bold text-white shadow rounded-md hover:bg-pink-500">
            Sign in
          </a>
          <a className="px-4 py-2 text-base font-medium text-center text-pink-500 transition bg-transparent border border-pink-500 rounded-md hover:bg-pink-100">
            Sign up
          </a>
        </div>

      </div>
      
    </nav>
  )
}