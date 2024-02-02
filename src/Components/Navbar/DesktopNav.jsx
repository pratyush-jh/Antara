import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNav = () => {

  const linkStyle = "mx-5 inline-block no-underline text-2xl font-bold text-white transition-all duration-500 hover:bg-white hover:text-blue-500 hover:px-2 hover:rounded-lg";

  return (
    <>
        <div className='flex justify-between items-center h-24 bg-black p-8 z-10' id='nav-desk-body'>
        <div className="logo text-6xl text-white p-3 rounded-lg z-10" id='nav-desk-logo'>
          Antara
        </div>
        <nav className="nav-bar">
            <ul className="flex text-blue-500">
                <Link to={''} className={linkStyle} id='nav-link'> Home </Link>
                <Link to={''} className={linkStyle} id='nav-link'> Events </Link>
                <Link to={''} className={linkStyle} id='nav-link'> Timeline </Link>
                <Link to={''} className={linkStyle} id='nav-link'> Contact Us </Link>
            </ul>
        </nav>
        </div>
    </>

  )
}

export default DesktopNav