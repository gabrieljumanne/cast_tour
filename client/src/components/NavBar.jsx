import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='w-full flex item center py-5  top-0 bg-[] ml-[20px] mr-[20px] font-bold'> 
      <Link to="/" className='w-[200px] hover:bg-gray-300'>Tourism Website</Link>
      <div className='w-full flex justify-end items-center max-[300px] gap-2 mr-[40px] '>
        <Link to="/" className='hover:text-gray-300 rounded-[15px] w-[90px]'>Home</Link>
        <Link to="/account" className='hover:text-gray-300 rounded-[15px] w-[90px]'>Account</Link>
        <Link to="/tours" className='hover:text-gray-300 rounded-[15px] w-[90px]'>Tours</Link>
        <button className='bg-pink-700 text-white rounded-[5px] w-[90px] hover:bg-pink-500'><Link to="/signup">Sign Up</Link></button>
        <button className='bg-pink-700 text-white rounded-[5px] w-[90px] hover:bg-pink-500'><Link to="/login">Login</Link></button>
      </div>
    </nav>
  )
}

export default NavBar