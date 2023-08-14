import React from 'react'
import Toggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav className='bg-sky-400 border-gray-200 mx-2 px-2 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex justify-between items-center mx-auto pt-3'>
        <div className='flex items-center mx-auto'>
          <span className='text-2xl font-bold text-white font-serif whitespace-nowrap dark:text-white '>
               Thunder Bolts
          </span>
        </div>

        <div className='flex  justify-end pr-4'>
          <Toggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
