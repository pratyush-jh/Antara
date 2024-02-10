import React, { useState, useEffect } from 'react';
import HomeFunction from '../../Functions/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero/Hero';
const DesktopHome = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh(); // This line will refresh AOS and cause animations to trigger again
  }
  , [navigate]);

  const {countdown, linkStyle } = HomeFunction();

  return (
    <div  className='-z-10 overflow-hidden' data-aos = "fade-down" >
      <Hero />
        
    </div>
  );
};

export default DesktopHome;
