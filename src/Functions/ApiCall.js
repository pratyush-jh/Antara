
import React, { useEffect } from 'react'
import { API_URL } from './Constants'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const ApiCall = () => {
  const [isverified, setIsVerified] = useState(false); 
  const [isToken , setIsToken] = useState(false);
  const [tokenUserData, setTokenUserData] = useState(null);
  const navigate = useNavigate();

      const checkToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          return false;
        }
      
        try {
          const response = await fetch(`${API_URL}/check-token` , {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });
      
          if (response.status !== 200) {
            throw new Error('Invalid token');
          }
            if (response.status === 200) {
            console.log('Token is valid');
            setIsToken(true);
            // console.log(response.user);
            return true;
          } else {
            throw new Error('Invalid token');
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      };
  
   const tokenData = async () => {
    const token = localStorage.getItem('token');
    if(token){
      const response = await fetch(`${API_URL}/check-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const data = await response.json();
      return data;
    }
  }; 

  useEffect(() => {
    tokenData().then((data) => {
      if(data){
        setIsVerified(true);
        setIsToken(true);
        setTokenUserData(data.userData);
      }
    });
    // console.log('isverified', isverified);
    // console.log('isToken', isToken);

  } , []);
   const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('LoggedIn');
  };
  return (
    { checkToken, tokenData, isverified, isToken,  tokenUserData , logout}
  )
}

export default ApiCall

