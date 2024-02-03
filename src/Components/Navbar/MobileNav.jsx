import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import MobNav from '../../Functions/MobNav';


const MobileNav = () => {
  const {Moblink} = MobNav();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div className="flex justify-between items-center h-20 bg-purple-300 p-4 z-10">
        <div className="logo text-5xl text-black p-2 rounded-lg z-10">
          Antara
        </div>
        <div className="flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black text-3xl"> 
            {isOpen ? <IoMdClose/> : <FaBars />}   
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} bg-purple-200 w-full h-screen fixed top-23 border-t-2 z-10`}>
        <div className="flex flex-col items-center justify-center h-full -mt-10">
          <Link to="*" className={Moblink} onClick={isOpen}>Home</Link>
          <Link to="/events" className={Moblink} onClick={isOpen}>Events</Link>
          <Link to="/timeline" className={Moblink} onClick={isOpen}>Timeline</Link>
          <Link to="/contact" className={Moblink} onClick={isOpen}>Contact</Link>
        </div>
      </div>

    
    </>
    )
}

export default MobileNav