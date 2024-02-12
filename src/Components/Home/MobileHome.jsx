import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Aos from 'aos';
import 'aos/dist/aos.css'
const MobileHome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){

    }
    setIsLoggedIn(true);
  }, [navigate])
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timeoutId = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  useEffect(()=>{
    Aos.init();
  }, [])

    const toggleAnswer = (index) => {
      if (index === clickedIndex) {
        setClickedIndex(null);
      } else {
        setClickedIndex(index);
      }
    };

  const colour = isLoggedIn ? 'brown' : 'blue';
  return (
    <div  className='-z-10 overflow-hidden relative' data-aos = "fade-up" >
    <Hero />
    
    </div>
  )
}

export default MobileHome