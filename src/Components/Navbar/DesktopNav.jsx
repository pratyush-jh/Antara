import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ApiCall from '../../Functions/ApiCall';
import './Navbar.css';

const DesktopNav = () => {
  const { checkToken } = ApiCall();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

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

  console.log(isLoggedIn);
  return (
    <nav className="bg-white shadow-lg pt-2 pb-2">
      <div className=" px-40">
        <div className="flex justify-between items-center">
          <div className="flex gap-40">
            <div>
              <Link to="/" className="flex items-center py-4 px-2 gap-12">
                <span className="logo text-2xl text-gray-500 ">Antara</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500">Home</Link>
              <Link to="/events" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500">Events</Link>
              <Link to="/timeline" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500">Timeline</Link>
              <Link to="/teams" className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500">Contact Us</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            {isLoggedIn ? 
              <button onClick={logout} className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400">Logout</button> : 
              <Link to="/login" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400">Login</Link>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;