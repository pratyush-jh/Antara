import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ApiCall from '../../Functions/ApiCall';

const MobileNav = () => {
  const { checkToken } = ApiCall();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      <div className="flex justify-between items-center h-20 bg-white shadow-lg p-4 z-10 pt-2 pb-2">
        <div className="logo text-2xl text-gray-500 p-2 rounded-lg z-10">
          Antara
        </div>
        <div className="flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 text-3xl"> 
            {isOpen ? <IoMdClose/> : <FaBars />}   
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} bg-white w-full h-screen fixed top-23 transition-all duration-500 ease-in-out z-10 `}>

        <div className="flex flex-col items-center justify-center h-full -mt-10 gap-10">
        {isLoggedIn ? 
            <button onClick={logout} className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 mt-4">Logout</button> : 
            <Link to="/login" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 mt-4">Login</Link>}
          <Link to="/" className="py-2 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/events" className="py-2 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/timeline" className="py-2 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out" onClick={() => setIsOpen(false)}>Timeline</Link>
          <Link to="/contact" className="py-2 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out" onClick={() => setIsOpen(false)}>Contact</Link>

        </div>
      </div>
    </>
  );
}

export default MobileNav;