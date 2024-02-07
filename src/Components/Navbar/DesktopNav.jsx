import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import UserProfile from '../../assets/userProfile.png';


const DesktopNav = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  
    const logout = async () => {
      setIsLoggedIn(false);
      localStorage.removeItem('token');
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

  const navbarStyle = `py-4 px-2 border-b-4 border-transparent ${isLoggedIn?'text-brown':' text-darkBlue'}  ${isLoggedIn?'hover:border-brown':'hover:border-darkBlue'} font-medium rounded`;
  return (
    <nav className={` shadow-lg pt-2 pb-2 ${!isLoggedIn?'bg-skyBlue':'bg-skin'}`}>
      <div className=" px-40">
        <div className="flex justify-between items-center">
          <div data-aos="fade-right">
          <Link to="/" className={`logo absolute -top-7 font-sans flex items-center py-4 px-2 gap-12 font ${isLoggedIn?'text-brown':' text-darkBlue'}`}>
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
          </div>
          <div className="flex gap-40">
            <div className="hidden md:flex items-center space-x-6">
              <Link data-aos="fade-down" to="/" className={navbarStyle}>Home</Link>
              <Link data-aos="fade-up" to="/events" className={navbarStyle}>Events</Link>
              <Link data-aos="fade-down" to="/timeline" className={navbarStyle}>Timeline</Link>
              <Link data-aos="fade-up" to="/teams" className= {navbarStyle}>Contact Us</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-3 ">
            {isLoggedIn ? 
              <div className=' flex justify-center items-center gap-10'>
                
                <Link to={'/dashboard'}>
                  <button data-aos="fade-left" className="py-2 px-2 font-medium rounded text-brown hover:text-rose-200 duration-500 transition-all">
                    <img src={UserProfile} alt="UserProfile" className="h-8 w-8 rounded-full" />
                  </button>
                </Link>
                <button data-aos="fade-left" onClick={logout} className="py-2 px-2 font-medium rounded text-brown hover:text-rose-200 duration-500 transition-all">Logout</button>


              </div> : 
            
              <Link data-aos="fade-left" to="/login" className=" flex items-center justify-center py-2 min-w-20 font-medium text-darkBlue rounded hover:text-midBlue duration-500 transition-all ">
                Login
              </Link>
   
              }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNav;