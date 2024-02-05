import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DektopNav from '../../Functions/DektopNav'

import { useNavigate } from 'react-router-dom';
import { checkToken} from '../../Functions/ApiCall';


const DesktopNav = () => {

  const {linkStyle} = DektopNav();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logout = async () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const checkAndNavigate = async () => {
      console.log('checking token');
      const result = await checkToken();
      setIsLoggedIn(result);
    };
    checkAndNavigate();
  }, [navigate]);
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
                <Link to={'/teams'} className={linkStyle}>Contact Us</Link>
            </ul>
        </nav>
        <div>
        {isLoggedIn ? <button onClick={logout} className="bg-blue-500 text-white px-3 py-1 rounded-lg">Logout</button> : <Link to={'/login'} className="bg-blue-500 text-white px-3 py-1 rounded-lg">Login</Link>}

        </div>
        </div>
    </>

  )
}

export default DesktopNav