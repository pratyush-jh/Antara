import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNav = () => {

  const linkStyle = "mx-5 inline-block no-underline text-2xl font-bold text-white transition-all duration-500 hover:bg-white hover:text-blue-500 hover:px-2 hover:rounded-lg mddmax:text-lg mddmax:mx-3";

  return (
    <>
        <div className='flex justify-between items-center h-24 bg-black p-8 z-10 mddmax:h-20 mddmax:p-5' >
        <div className="logo text-6xl text-white p-3 rounded-lg z-10 mddmax:text-4xl mddmax:p-1" >
          Antara
        </div>
        <nav className="nav-bar">
            <ul className="flex text-blue-500">
                <Link to={''} className={linkStyle}> Home </Link>
                <Link to={''} className={linkStyle}> Events </Link>
                <Link to={''} className={linkStyle}> Timeline </Link>
                <Link to={''} className={linkStyle}> Contact Us </Link>
            </ul>
        </nav>
        </div>
    </>

  )
}

export default DesktopNav