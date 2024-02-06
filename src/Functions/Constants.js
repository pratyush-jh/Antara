import React from 'react';
// import { useNavigate } from 'react-router-dom';

export let isLogin = false;

// export const API_URL = 'http://localhost:5000';
export const API_URL = 'https://rishi.pgdavhyperion.in';


export const fetchEvents = async () => {
     // * Function to check if the user is verified or not 
     const token = localStorage.getItem('token');
     if (!token) {
       navigate('/login');
     }
     try{
       const response = await fetch(`${API_URL}/auth-user`, 
       
       {
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`
           } ,
           method: 'GET'
       });
       const data = await response.json();
       if (response.status === 401) {
         navigate('/login');
       }
       return data;
     }
     catch(error){
       console.error('Error:', error);
     }
   }