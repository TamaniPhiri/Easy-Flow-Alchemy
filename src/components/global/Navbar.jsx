import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 

const Navbar = () => {
  const [open, setOpen]=useState(false)
  return (
    <div className='fixed top-0 w-full z-50'>
      <nav className='relative w-full flex justify-between bg-[rgb(120,223,214)] text-white py-6 px-4 md:px-8 lg:px-12'>
        <div>EASY-FLOW-ALCHEMY</div>
        <div className='lg:flex hidden  gap-8 '>
          <Link className='mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded shadow-xl md:shadow-xl hover:bg-green-400 hover:text-white transition-colors duration-300'>Buy</Link>
          <Link className='mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded shadow-xl md:shadow-xl hover:bg-green-400 hover:text-white transition-colors duration-300'>Latest</Link>
          <Link className='mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded shadow-xl md:shadow-xl hover:bg-green-400 hover:text-white transition-colors duration-300'>Donate</Link>
        </div>
        <div className='lg:hidden flex '>
          <button onClick={()=>setOpen(!open)}>Menue</button>
        </div>
        <motion.div animate={open?{opacity:1,x:0}:{opacity:0,x:"100%"}} className='absolute top-[100%] bg-black lg:hidden min-h-screen right-0 w-2/3'>    
          <div className='flex flex-col gap-4 p-4'>
          <Link className=' bg-green-500 rounded'>Buy</Link>
          <Link className=' bg-green-500 rounded'>Latest</Link>
          <Link className=' bg-green-500 rounded'>Donate</Link>
          </div>
        </motion.div>
      </nav>

    </div>
  )
}

export default Navbar