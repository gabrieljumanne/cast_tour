import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='w-full flex h-[50px]   '> 
      <div className='w-full flex h-[40px] justify-end items-center py-5 bg-gray-500 font-bold top-[5px] text-white pl-[20px] '>
      <Link to="/" className='w-[200px]'>Tourism Website</Link>
      <div className='w-full flex justify-end items-center max-[300px] gap-2 mr-[40px] '>
        <Link to="/" className='hover:text-gray-300 rounded-[15px] w-[90px]'>Home</Link>
        <Link to="/account" className='hover:text-gray-300 rounded-[15px] w-[90px]'>Account</Link>
        <Link to="/tours" className='hover:text-gray-300 rounded-[15px] w-[90px]'>Tours</Link>
        <button className='bg-pink-700 text-white rounded-[5px] h-[25px] w-[90px] hover:bg-pink-500'><Link to="/signup">Sign Up</Link></button>
        <button className='bg-pink-700 text-white rounded-[5px] w-[90px] hover:bg-pink-500'><Link to="/login">Login</Link></button>
      </div>
      </div>
    </nav>
  )
}

export default NavBar