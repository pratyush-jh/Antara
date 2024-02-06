import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';


const MobileNav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const logout = async () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    setIsOpen(false);
    navigate('/');
  };

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

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  const navbarStyle = `py-2 px-2 border-b-4 border-transparent ${isLoggedIn?'text-brown':' text-darkBlue'}  ${isLoggedIn?'hover:border-brown':'hover:border-darkBlue'} font-medium rounded`;
  return (
    <>
      <div className={`flex justify-between items-center h-20 shadow-lg p-4 z-10 pt-2 pb-2 ${!isLoggedIn?'bg-skyBlue':'bg-skin'}`}>
          <Link to="/" className={`logo  font-sans flex items-center py-4 px-2 gap-12 font ${isLoggedIn?'text-brown':' text-darkBlue'}`}>
              <TypeAnimation
              sequence={[
                'HYPERION',
                1500, 
                'AROHNA',
                1500,
                'TECHWHIZ',
                1500,
                'AROHNA',
                1500
              ]}
                  wrapper="span"
                  speed={20}
                  style={{ fontSize: '20px', display: 'inline-block' }}
                  repeat={2}
                />
                </Link>
        <div className="flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className={`text-gray-500 text-3xl ${isLoggedIn?'text-brown':' text-darkBlue'}`}> 
            {isOpen ? <IoMdClose/> : <FaBars />}   
          </button>
        </div>
      </div>



      <div className={`${isOpen ? 'block' : 'hidden'} w-full h-screen fixed top-23 transition-all duration-500 ease-in-out z-10 ${!isLoggedIn?'bg-skyBlue':'bg-skin'}  `}>

        <div className="flex flex-col items-center justify-center h-full -mt-10 gap-10">
        {isLoggedIn ? 
            <button onClick={logout} className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 mt-4">Logout</button> : 
            <Link to="/login"  onClick={() => setIsOpen(false)} className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 mt-4">Login</Link>}

          <Link to="/" className={navbarStyle} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/events" className={navbarStyle} onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/timeline" className={navbarStyle} onClick={() => setIsOpen(false)}>Timeline</Link>
          <Link to="/contact" className={navbarStyle} onClick={() => setIsOpen(false)}>Contact</Link>

        </div>
      </div>
    </>
  );
}

export default MobileNav;