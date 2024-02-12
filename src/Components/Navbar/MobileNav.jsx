import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation';
import UserProfile from '../../assets/userProfile.png';


const MobileNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isOnDashboard, setIsOnDashboard] = useState(false);

  const logout = async () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    setIsOpen(false);
    navigate('/');
  };

useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [isOpen]);

useEffect(() => {
  setIsOnDashboard(location.pathname === '/dashboard');
}, [navigate, location]);
  
useEffect(() => {

  if (location.pathname === '/dashboard') {
    setIsOnDashboard(true);
  }
  else {
    setIsOnDashboard(false);
  }
}, [location]);

  useEffect(() => {
    const checkAndNavigate = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkAndNavigate();
  }, [navigate]);


  const navbarStyle = `py-2 px-2 border-b-4 border-transparent ${isLoggedIn?`${isOnDashboard? 'text-white':'text-brown'}`:' text-darkBlue'}  ${isLoggedIn?'hover:border-brown':'hover:border-darkBlue'} font-medium rounded`;
  return (
    <>
      <div className={`flex justify-between items-center h-20 shadow-lg p-4 z-10 pt-2 pb-2 ${!isLoggedIn?'bg-skyBlue':`${isOnDashboard? 'bg-gradient-to-r from-black to-linear-darkBlue ':'bg-skin'}`}`}>
          <Link to="/" className={`logo flex items-center py-4 px-2 gap-12 font ${isLoggedIn?`${isOnDashboard? 'text-white':'text-brown'}`:' text-darkBlue'}`}>
              <TypeAnimation
              sequence={[
                'HYPERION',
                1500, 
                'AROHANA',
                1500,
                'HYPERION',
                1500,
                'AROHANA',
                1500
              ]}
                  wrapper="span"
                  speed={20}
                  style={{ fontSize: '20px', display: 'inline-block' , fontFamily: "fantasy"}}
                  repeat={2}
                />
                </Link>
        <div onClick={() => setIsOpen(!isOpen)}>
          <button> 
            <div className={`hamburger ${isOpen? 'is-active' :''}`} >
              <div className="hamburger__container" >
                <div className="hamburger__inner"></div>
                <div className="hamburger__hidden"></div>
              </div>
            </div>
          </button>
        </div>
      </div>



      <div className={`${isOpen ? 'block' : 'hidden'} z-40 w-full h-screen fixed top-23 transition-all duration-500 ease-in-out  ${!isLoggedIn?'bg-skyBlue':`${isOnDashboard? 'bg-black':'bg-skin' }`}`}>

        <div className="flex flex-col items-center justify-center h-full -mt-10 gap-10 ">
        {isLoggedIn ? 
              <div className=' flex flex-col justify-center items-center gap-10'>
                
                <Link to={'/dashboard'} onClick={() => setIsOpen(false)}>
                  <button className="py-2 px-2 font-medium rounded text-brown hover:text-rose-200 duration-500 transition-all">
                    <img src={UserProfile} alt="Dash Board" className="h-8 w-8 rounded-full" />
                  </button>
                </Link>
              </div> : 
            
            <div className='btn' onClick={() => setIsOpen(false)} >
            <Link to="/login" className=" flex items-center justify-center min-w-20 font-medium text-white btn-content-login duration-500 transition-all ">
              Login
            </Link>
          </div>
              }

          <Link to="/" className={navbarStyle} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/events" className={navbarStyle} onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/timeline" className={navbarStyle} onClick={() => setIsOpen(false)}>Timeline</Link>
          <Link to="/contact" className={navbarStyle} onClick={() => setIsOpen(false)}>Contact</Link>
          {isLoggedIn ? 
          <button  onClick={logout} className={` py-2 px-2 font-medium rounded ${isOnDashboard?'text-white':'text-brown' } hover:text-rose-200 duration-500 transition-all`}>Logout</button>

            : null
          }
        </div>
      </div>
    </>
  );
}

export default MobileNav;