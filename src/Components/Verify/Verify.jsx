import React from 'react'

import { useEffect, useState } from 'react';
import { authUser } from '../../Functions/Constants';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../Functions/Constants';
import Modal from 'react-modal';
Modal.setAppElement('#root'); // For screen readers
const Verify = () => {
     const navigate = useNavigate();

     const [user, setUser] = useState([]);
     const [alertMessage, setAlertMessage] = useState(null); // New state variable
    //* Check if the user is logged in and if not, redirect to the login page
     useEffect(() => {
          const token = localStorage.getItem('token');
          if (!token) {
               navigate('/login');
          }
          else{
          authUser().then((data) => {
            setUser(data.data);
          });}
     }
     , [navigate]);

     useEffect(() => {

     }, []);

     const showAlert = (message) => {
      setAlertMessage(message);
      setTimeout(() => setAlertMessage(null), 2000); 
    };

    //*  if the user is already verified, redirect to the dashboard

     useEffect(() => {
       if(!user.email_verified_at === null){
         navigate(`/dashboard`);
       }
       else if (user.email_verified_at === null){
        const sendEmailVerification = async () => {
          const token = localStorage.getItem('token');
          const response = await fetch(`${API_URL}/send-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          const data = await response.json();
          console.log(data);
        }
        sendEmailVerification();
       }
     }, [user]);
     
     if (user.length === 0) {
           return <div className='flex flex-col justify-center items-center h-screen bg-brown text-white gap-10'>Loading...</div>;
      }
    //  function to check autmatic verification of the email, once the user is verified, redirect to the dashboard
    const checkVerified = () => {
      if(user.email_verified_at !== null){
        showAlert('Email verified successfully');
        navigate(`/dashboard`);
      }
      else if (user.email_verified_at === null){
        showAlert('Email not verified yet'); 
      }
   }

  return (

     // Code to verify the email address
    <>
      <Modal isOpen={!!alertMessage} onRequestClose={() => setAlertMessage(null)}
       className={`
       absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-skin p-8 rounded-lg`}
      >
        <p>{alertMessage}</p>
        <button className='bg-brown text-white p-2 rounded-lg mt-4 w-full'
         onClick={() => setAlertMessage(null)}>Close</button>
      </Modal>
          <div className="flex flex-col justify-center items-center h-screen bg-brown text-white gap-10">
               <h1 className='text-3xl font-bold text-center mt-4 mb-8'>Verify your email address</h1>
               <p className='text-center'>We have sent you an email with a link to your email address {user.email} </p>
               <div className='flex flex-col justify-center items-center bg-brown text-white gap-10'
                    >
                          <button onClick={checkVerified} className='bg-white text-brown p-2 rounded-lg mt-4'>Check Verification</button>
                </div>                    
          </div>

    </>
  )
}

export default Verify