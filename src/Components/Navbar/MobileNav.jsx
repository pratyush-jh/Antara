import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div className="flex justify-between items-center h-24 bg-black p-8 z-10">
        <div className="logo text-6xl text-white p-3 rounded-lg z-10">
          Antara
        </div>
        <div className="flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl"> 
            {isOpen ? <IoMdClose /> : <FaBars />}   
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} bg-black w-full h-screen fixed top-24 z-10`}>
        <div className="flex flex-col items-center justify-center h-full">
          <Link to="/" className="text-white text-4xl p-4">Home</Link>
          <Link to="/about" className="text-white text-4xl p-4">About</Link>
          <Link to="/services" className="text-white text-4xl p-4">Services</Link>
          <Link to="/contact" className="text-white text-4xl p-4">Contact</Link>
        </div>
      </div>

    
    </>
    )
}

export default MobileNav