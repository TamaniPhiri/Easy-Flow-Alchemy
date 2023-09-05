import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 

const Navbar = () => {
  const [open, setOpen]=useState(false)
  return (
    <div className='fixed top-0 w-full z-50'>
      <nav className='relative w-full flex justify-between bg-[#0a0a0a] text-white py-6 px-4 md:px-8 lg:px-12'>
        <div>logo</div>
        <div className='lg:flex hidden  gap-8 '>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
          <Link>Link 3</Link>
        </div>
        <div className='lg:hidden flex '>
          <button>Menue</button>
        </div>
        <motion.div animate={open?{opacity:1}:{opacity:0}} className='absolute top-[100%] bg-black lg:hidden min-h-screen right-0 w-2/3'>    
          <div className='flex flex-col gap-4 p-4'>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
          <Link>Link 3</Link>
          </div>
        </motion.div>
      </nav>

    </div>
  )
}

export default Navbar