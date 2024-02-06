import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';



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
  return (
    <nav className="bg-white shadow-lg pt-2 pb-2">
      <div className=" px-40">
        <div className="flex justify-between items-center">
          <div data-aos="fade-right">
          <Link to="/" className="logo absolute -top-7 font-sans flex items-center py-4 px-2 gap-12 font">
          <TypeAnimation
          sequence={[
            'HYPERION',
            1500, 
            'AAROHNA',
            1500,
            'TECHWHIZ',
            1500,
            'AAROHNA',
            1500
          ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '20px', display: 'inline-block' }}
              repeat={2}
            />
            </Link>
          </div>
          <div className="flex gap-40">
            <div className="hidden md:flex items-center space-x-6">
              <Link data-aos="fade-down" to="/" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500">Home</Link>
              <Link data-aos="fade-up" to="/events" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500">Events</Link>
              <Link data-aos="fade-down" to="/timeline" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500">Timeline</Link>
              <Link data-aos="fade-up" to="/teams" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500">Contact Us</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            {isLoggedIn ? 
              <button data-aos="fade-left" onClick={logout} className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400">Logout</button> : 
            
              <Link data-aos="fade-left" to="/login" className=" flex items-center justify-center py-2 min-w-20 font-medium text-white bg-blue-500 rounded hover:bg-blue-400">
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