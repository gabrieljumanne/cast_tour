// Navbar.jsx

import { useState } from 'react'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">



      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">

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
        className={`absolute top-[60px] h-[120px] w-[150px] px-[20px] bg-white z-10 origin-top-right transition-all duration-300 
        ${isOpen ? 'right-0' : '-right-full'}
        `}>
        
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/destinations">Destinations</a></li>
          <li><a href="/tours">Tours</a></li>
          <li><a href="/customizable">Packages</a></li>
          <li><a href="/about">About</a></li>        
        </ul>
      
      </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div className='flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden'>
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
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
          <a className="px-4 py-2 text-base font-medium text-center text-white transition bg-primary-500 rounded-md hover:bg-primary-600">
            Sign in
          </a>
          <a className="px-4 py-2 text-base font-medium text-center text-primary-500 transition bg-transparent border border-primary-500 rounded-md hover:bg-primary-100">
            Sign up
          </a>
        </div>

      </div>
      
    </nav>
  )
}