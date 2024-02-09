import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import UserProfile from '../../assets/userProfile.png';
import { useSpring, animated } from 'react-spring';



const DesktopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isOnDashboard, setIsOnDashboard] = useState(false);
  const [previousLocation, setPreviousLocation] = useState('');

    const logout = async () => {
      setIsLoggedIn(false);
      localStorage.removeItem('token');
      navigate('/');
    };
    const fade = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 1000,
    });
  useEffect(() => {
    setIsOnDashboard(location.pathname === '/dashboard');
    if (location.pathname === '/dashboard') {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'initial'; // or any other default color
    }
  }, [navigate, location]);


  // useEffect(() => {
  //   if (previousLocation === '/dashboard' && location.pathname !== '/dashboard') {
  //     window.location.reload();
  //   }
  //   setPreviousLocation(location.pathname);
  // }, [location]);


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
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
    AOS.refresh();
  }, [navigate, location]);

  const color = isLoggedIn ? `${isOnDashboard ? 'white' : 'brown'}` : 'darkBlue';
  const bgcolor = isLoggedIn ? 'skin' : 'midBlue';

  const navbarStyle = `py-4 px-2 border-b-4 border-transparent ${isLoggedIn? `${isOnDashboard? 'text-white':'text-brown'}` :' text-darkBlue'} 
  ${isLoggedIn? `${isOnDashboard? 'navbar':'hover:border-brown'}`: 'hover:border-darkBlue'}  font-medium rounded`;
  return (
<nav className={`shadow-lg pt-2 pb-2 ${isOnDashboard ? 'bg-gradient-to-r from-black to-linear-darkBlue    ' : `bg-${bgcolor}`}`}>
      <div className=" px-40">
        <div className="flex justify-between items-center">
          <div data-aos="fade-right">
          <Link to="/" className={`logo absolute -top-7 font-sans flex items-center py-4 px-2 gap-12  text-${color}`}>
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
              style={{ fontSize: '20px', display: 'inline-block' }}
              repeat={2}
            />
            </Link>
          </div>
          <div className="flex gap-40 " >
            <div className="hidden md:flex items-center space-x-6">
              <Link data-aos="fade-down" to="/" >
                <button className={navbarStyle}>
                  Home
                </button>
                </Link>
              <Link data-aos="fade-up" to="/events"> <button  className={navbarStyle}>Events</button></Link>
              <Link data-aos="fade-down" to="/timeline" ><button className={navbarStyle}>Timeline</button></Link>
              <Link data-aos="fade-up" to="/teams" ><button className= {navbarStyle}> Contact Us</button></Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-3 ">
            {isLoggedIn ? 
              <div className=' flex justify-center items-center gap-10'>
                
                <Link to={'/dashboard'} className={`${isOnDashboard? ' text-white  hover:text-rose-600 navbar':' text-brown hover:text-rose-200'}`} >
                  <button data-aos="fade-left" className={`py-2 px-2 font-medium roundedduration-500 transition-all flex flex-col items-center`}>
                    <img src={UserProfile} alt="UserProfile" className="h-8 w-8 rounded-full text-white" />
                    <div className=' text-sm'>
                      Dash Board
                    </div>
                  </button>
                </Link>
                <button data-aos="fade-left" onClick={logout} className={`py-2 px-2 font-medium rounded  duration-500 transition-all`}>
                  <p className={`${isOnDashboard? 'text-white hover:text-rose-700':'text-brown hover:text-pink'}`} >
                    Logout
                  </p>
                </button>
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