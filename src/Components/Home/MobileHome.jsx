import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero/Hero';
const MobileHome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){

    }
    setIsLoggedIn(true);
  }, [navigate])
  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    const timeoutId = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 5000);

    // Clean up function
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  const colour = isLoggedIn ? 'brown' : 'blue';
  return (
    <div  className='-z-10 overflow-hidden' data-aos = "fade-up" >
    <Hero />
      
  </div>
  )
}

export default MobileHome