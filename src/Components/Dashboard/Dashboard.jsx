import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {


  // Verify the token and navigate to the login page if the token is present but invalid

const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false);
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
     navigate('/');
     }
   };
   checkAndNavigate();
 }, [navigate]);

  return (
    <>    
     <div className="flex justify-around items-start h-16 bg-pink text-white gap-10">
          <h1 className='text-3xl font-bold text-center mt-4 mb-8'>Dashboard</h1>
     </div>
     {/* //* Styling in Dashboard.css */}
     <div className="dashboard-hero">
     </div>
    </>
  )
}

export default Dashboard