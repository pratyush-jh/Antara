import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Api from '../../Functions/api';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { authUser } = Api();
  const [user, setUser] = useState('');

const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false);


useEffect(() => {
   const checkAndNavigate = async () => {
     const token = localStorage.getItem('token');
     if (token) {
      authUser().then((data) => {
        setUser(data.data);
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
     <div className="flex justify-around items-center h-16 bg-pink text-white ">
          <h1 className='text-3xl font-bold'>Dashboard</h1>
          <div className='flex gap-1 '>
          <TypeAnimation
          sequence={[
            `Namaste ${user.name.split(' ')[0]} 🙏`,
            1500, 
            `Hola ${user.name.split(' ')[0]} 👋`,
            1500,
            `Hello ${user.name.split(' ')[0]} 👐`,
            1500,
            `Bonjour ${user.name.split(' ')[0]} 👋`,
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
     <div className="dashboard-hero">
          <div className=''>
               <div   className=' text-brown flex gap-2'>
               Email Verification Status: {user.email_verified_at === null ? <div className=' flex gap-3'>
                    <p>Not Verified  </p>
                    <Link to='/verify'  className='text-white'
                    > Verify Now</Link>
               </div> : 'Verified'}
               

               </div>
          </div>
     </div>
    </>
  )
}

export default Dashboard