import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='fixed top-0 w-full z-50 items-center justify-center'>
      <nav className='relative w-full flex justify-between items-center shadow-2xl bg-[rgb(120,223,214)] text-white py-6 px-4 md:px-8 lg:px-12'>

        <svg
          viewBox="0 0 18 16"
          fill="currentColor"
          height="3.0em"
          width="3.0em"

        >
          <path
            fill="currentColor"
            d="M3.5 2h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5zM3 5H1V4h2v1zM8.5 2h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5zM8 5H6V4h2v1z"
          />
          <path
            fill="currentColor"
            d="M11.954 2.773l-2.679 1.35a.502.502 0 00-.222.671l4.5 8.93a.502.502 0 00.671.222l2.679-1.35a.502.502 0 00.222-.671l-4.5-8.93a.502.502 0 00-.671-.222z"
          />
          <path fill="currentColor" d="M14.5 13.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
        </svg>

        <div className='lg:flex hidden  gap-8 items-center justify-center'>
          <Link className='mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded shadow-xl md:shadow-xl hover:bg-green-400 hover:text-white transition-colors duration-300'>Buy</Link>
          <Link className='mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded shadow-xl md:shadow-xl hover:bg-green-400 hover:text-white transition-colors duration-300'>Latest</Link>
          <Link className='mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded shadow-xl md:shadow-xl hover:bg-green-400 hover:text-white transition-colors duration-300'>Donate</Link>
        </div>
        <div className='lg:hidden flex font-bold text-lg'>
          <button onClick={() => setOpen(!open)}>Menu</button>
        </div>
        <motion.div animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }} className='absolute top-[100%] bg-black lg:hidden min-h-screen right-0 w-2/3'>
          <div className='flex flex-col gap-4 p-4'>
            <Link className='text-white '>Buy</Link>
            <Link className='text-white'>Donate</Link>
            <Link className='text-white'>Latest</Link>
          </div>
        </motion.div>
      </nav>

    </div>
  )
}

export default Navbar