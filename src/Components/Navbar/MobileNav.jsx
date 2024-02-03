import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import {AiFillHome, AiFillCalendar, AiOutlineFieldTime, AiFillContacts} from 'react-icons/ai'
import { IoMdClose } from "react-icons/io";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Moblink ="text-white w-55 justify-center text-2xl flex items-center py-3 px-5 bg-purple-700 rounded-2xl my-3 active:bg-white active:text-purple-700 active:font-bold"

  return (
    <>

      <div className="flex justify-between items-center h-20 bg-purple-700 p-4 z-10">
        <div className="logo text-5xl text-white p-2 rounded-lg z-10">
          Antara
        </div>
        <div className="flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl"> 
            {isOpen ? <IoMdClose/> : <FaBars />}   
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} bg-purple-500 font- w-full h-screen fixed top-23 border-t-2 z-10`}>
        <div className="flex flex-col items-center justify-center h-full -mt-10">
          <Link to="/" className={Moblink} onClick={isOpen}>Home&nbsp;<AiFillHome/></Link>
          <Link to="/about" className={Moblink} onClick={isOpen}>Events&nbsp;<AiFillCalendar/></Link>
          <Link to="/services" className={Moblink} onClick={isOpen}>Services&nbsp;<AiOutlineFieldTime/></Link>
          <Link to="/contact" className={Moblink} onClick={isOpen}>Contact&nbsp;<AiFillContacts/></Link>
        </div>
      </div>

    
    </>
    )
}

export default MobileNav