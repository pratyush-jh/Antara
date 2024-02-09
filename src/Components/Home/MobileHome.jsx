import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const MobileHome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/login');
    }
    setIsLoggedIn(true);
  }, [navigate])

  const colour = isLoggedIn ? 'brown' : 'blue';
  return (
    <div>MobileHome</div>
  )
}

export default MobileHome