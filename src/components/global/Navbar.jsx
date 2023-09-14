import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='fixed top-0 w-full z-50'>
      <nav className='relative w-full flex justify-between shadow-2xl bg-[rgb(120,223,214)] text-white py-6 px-4 md:px-8 lg:px-12'>
        <div><span className=''>EASY-FLOW</span><span className='text-green-500'>-ALCHEMY</span></div>
        <div className='lg:flex hidden  gap-8 '>
          <Link className='mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded shadow-xl md:shadow-xl hover:bg-green-400 hover:text-white transition-colors duration-300'>Buy</Link>
          <Link className='mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded shadow-xl md:shadow-xl hover:bg-green-400 hover:text-white transition-colors duration-300'>Latest</Link>
          <Link className='mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded shadow-xl md:shadow-xl hover:bg-green-400 hover:text-white transition-colors duration-300'>Donate</Link>
        </div>
        <div className='lg:hidden flex '>
          <button onClick={() => setOpen(!open)}>Menue</button>
        </div>
        <motion.div animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }} className='absolute top-[100%] bg-black lg:hidden min-h-screen right-0 w-2/3'>
          <div className='flex flex-col gap-4 p-4'>
            <Link className='text-[rgb(120,223,214)] '>Buy</Link>
            <Link className='text-[rgb(120,223,214)]'>Donate</Link>
            <Link className='text-[rgb(120,223,214)]'>Latest</Link>
          </div>
        </motion.div>
      </nav>

    </div>
  )
}

export default Navbar