import React from 'react'

import { useEffect, useState } from 'react';
import { fetchEvents } from '../../Functions/Constants';
import { useNavigate } from 'react-router-dom';


const Verify = () => {
     const navigate = useNavigate();

     const [user, setUser] = useState([]);

     useEffect(() => {
          const token = localStorage.getItem('token');
          if (!token) {
               navigate('/login');
          }
     }
     , [navigate]);
     useEffect(() => {
       fetchEvents().then((data) => {
         setUser(data.data);
       })
     }, []);
   
     useEffect(() => {
       if(!user.email_verified_at === null){
         navigate(`/events`);
       }
     }, [user]);
     
     if (user.length === 0) {
           return <div className='flex flex-col justify-center items-center h-screen bg-brown text-white gap-10'>Loading...</div>;
      }
     const checkVerified = () => {
          // Code to check if the email is verified and if it is verified then redirect him to the thanks page.
     }
  return (

     // Code to verify the email address
    <>
          <div className="flex flex-col justify-center items-center h-screen bg-brown text-white gap-10">
               <h1 className='text-3xl font-bold text-center mt-4 mb-8'>Verify your email address</h1>
               <p className='text-center'>We have sent you an email with a link to verify your email address. </p>
               <p className='text-center'>If you have not received the email, please click on the button below.</p>
               <button className='bg-white text-brown px-4 py-2 rounded-md font-bold'>Resend Email</button>
          </div>

    </>
  )
}

export default Verify