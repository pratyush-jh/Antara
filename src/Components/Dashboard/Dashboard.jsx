import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Api from '../../Functions/api';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import UserEventDetails from './UserEventDetails';
const Dashboard = () => {
  const { authUser } = Api();
  const [user, setUser] = useState('');

const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [activeComponent, setActiveComponent] = useState('userProfile');


useEffect(() => {
   const checkAndNavigate = async () => {
     const token = localStorage.getItem('token');
     if (token) {
      authUser().then((data) => {
        setUser(data?.data);
      })
       setIsLoggedIn(true);
     } else {
    setIsLoggedIn(false);
     navigate('/login');
     }
   };
   checkAndNavigate();
 }, [navigate]);

 if (user.length === 0) {
   return <div className='dashboard-hero flex justify-center items-center text-white'>
     <h1> We are Getting Your Data Wait ..</h1>
   </div>;
     }

  return (
    <>    
     <div className="z-30 flex justify-around items-center h-16 bg-pink text-white dashboard">
          <h1 className='text-3xl font-bold'>Dashboard</h1>
          <div className='flex gap-1 '>
          <TypeAnimation
          sequence={[
            `Namaste ${user?.name.split(' ')[0]} 🙏`,
            1500, 
            `Hola ${user?.name.split(' ')[0]} 👋`,
            1500,
            `Hello ${user?.name.split(' ')[0]} 👐`,
            1500,
            `Bonjour ${user?.name.split(' ')[0]} 👋`,
            1500
          ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: '20px', display: 'inline-block', width: '200px'}}
              repeat={2}
            />

          </div>
     </div>
     {/* //* Styling in Dashboard.css */}
    <div className="flex">
      <div className="flex flex-col w-1/5 p-4 z-10 bg-gray-200 min-h-screen ">
        <button 
          className={`w-full py-2 px-4 rounded ${activeComponent === 'userProfile' ? 'bg-brown text-white' : ''}`} 
          onClick={() => setActiveComponent('userProfile')}
        >
          Profile
        </button>
        <button 
          className={`w-full py-2 px-4 rounded mt-2 ${activeComponent === 'userEventDetails' ? 'bg-brown text-white' : ''}`} 
          onClick={() => setActiveComponent('userEventDetails')}
        >
          Event Details
        </button>
      </div>

      <div className="w-4/5 p-4 rounded-sm shadow-inner shadow-brown">
        {activeComponent === 'userProfile' && <UserProfile user = {user} />}
        {activeComponent === 'userEventDetails' && <UserEventDetails />}
      </div>
    </div>
    </>
  )
}

export default Dashboard