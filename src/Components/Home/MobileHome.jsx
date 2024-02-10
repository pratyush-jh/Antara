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

  const colour = isLoggedIn ? 'brown' : 'blue';
  return (
    <div  className='-z-10 overflow-hidden' data-aos = "fade-down" >
    <Hero />
      
  </div>
  )
}

export default MobileHome