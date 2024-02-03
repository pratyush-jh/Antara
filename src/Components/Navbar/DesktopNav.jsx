import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome, AiFillCalendar, AiOutlineFieldTime, AiFillContacts} from 'react-icons/ai'

const DesktopNav = () => {

  const linkStyle = "mx-4 inline-block flex items-center no-underline text-2xl font-bold text-white transition-all duration-500 hover:bg-white hover:text-purple-700 hover:px-2 hover:rounded-lg mddmax:text-xl mddmax:mx-2";

  return (
    <>
        <div className='flex justify-between items-center h-24 bg-purple-700 p-5 z-10 mddmax:h-20 mddmax:p-3' >
        <div className="logo text-6xl text-white p-2 rounded-lg z-10 mddmax:text-4xl mddmax:p-1" >
          Antara
        </div>
        <nav className="nav-bar">
            <ul className="flex text-blue-500">
                <Link to={''} className={linkStyle}>Home&nbsp;<AiFillHome/></Link>
                <Link to={''} className={linkStyle}>Events&nbsp;<AiFillCalendar/></Link>
                <Link to={''} className={linkStyle}>Timeline&nbsp;<AiOutlineFieldTime/></Link>
                <Link to={''} className={linkStyle}>Contact Us&nbsp;<AiFillContacts/></Link>
            </ul>
        </nav>
        </div>
    </>

  )
}

export default DesktopNav