import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DektopNav from '../../Functions/DektopNav'

const DesktopNav = () => {

  const {linkStyle} = DektopNav();

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
        <div className='flex justify-between items-center h-24 bg-purple-300 p-3 z-10 mddmax:h-20 mddmax:p-2' >
        <div className="logo text-6xl text-black p-2 rounded-lg z-10 mddmax:text-4xl mddmax:p-1" >
          Antara
        </div>
        <nav className="nav-bar">
            <ul className="flex text-blue-500">
                <Link to={'*'} className={linkStyle}>Home</Link>
                <Link to={'/events'} className={linkStyle}>Events</Link>
                <Link to={'/timeline'} className={linkStyle}>Timeline</Link>
                <Link to={'/contact'} className={linkStyle}>Contact Us</Link>
            </ul>
        </nav>
        <div className={`${!isLogin ? 'block' : 'hidden'}`}>
          <Link to={''} className={linkStyle} onClick={() => setIsLogin(!isLogin)}>Login</Link>
        </div>
        <div className={`${isLogin ? 'block' : 'hidden'}`}>
          <Link to={''} className={linkStyle} onClick={() => setIsLogin(!isLogin)}>Logout</Link>
        </div>
        </div>
    </>

  )
}

export default DesktopNav