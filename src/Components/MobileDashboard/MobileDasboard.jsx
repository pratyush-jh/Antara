import React from 'react'
import Api from '../../Functions/api'
import MobileParticipation from './MobileParticipation';
import MobileProfile from './MobileProfile';
import MobileTeams from './MobileTeams';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const MobileDasboard = () => {
     const { authUser } = Api();
     const [user, setUser] = useState('');
     const navigate = useNavigate();
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [activeComponent, setActiveComponent] = useState('userProfile');
     const [hamOpen, setHamOpen] = useState(false);
     useEffect(() => {
       const checkAndNavigate = async () => {
         const token = localStorage.getItem('token');
         if (token) {
           authUser().then((data) => {
             setUser(data?.data);
           })
           setIsLoggedIn(true);
         }
       };
       checkAndNavigate();
     }, [navigate]);


  return (
     <>
            <div className="z-30 flex justify-between  pr-48  items-center h-16 bg-gradient-to-r from-black to-linear-darkBlue    text-white dashboard mdmax:pr-0 mdmax:flex-row-reverse"  data-aos-delay="200">
           <div className={`hamburger ${hamOpen? 'is-active' :''}`} onClick={() => setHamOpen(!hamOpen)}>
               <div className="hamburger__container">
                 <div className="hamburger__inner"></div>
                 <div className="hamburger__hidden"></div>
               </div>
           </div>
           <h1 className='text-3xl hover:text-rose-600 select-none font-bold' data-aos="fade-left" data-aos-delay="400">Dashboard</h1>
            </div>
            <div className={`dashboard-sidebar ${hamOpen ? 'w-1/5 mdmax:w-full' : 'w-0 mdmax:w-0'}`} >
           <div className="flex flex-col items-center justify-center h-full
               bg-black dashboard-left" >
               <button 
                 className={`glow-on-hover ${activeComponent === 'userProfile' ? 'open' : 'close'}`} 
                 onClick={() => setActiveComponent('userProfile')}
               >
                     Profile
               </button>
               <button 
                 className={` glow-on-hover ${activeComponent === 'userEventDetails' ? 'open' : 'close'}`} 
                 onClick={() => setActiveComponent('userEventDetails')}
               >
                     Participation
               </button>
               <button 
                 className={` glow-on-hover ${activeComponent === 'userTeams' ? 'open' : 'close'}`} 
                 onClick={() => setActiveComponent('userTeams')}
               >
                     Teams
               </button>
          </div>
          </div>
          
     
     <div 
          className={`dashboard-body ${hamOpen ? 'w-4/5 mdmax:w-0' : 'w-full mdmax:w-full'} ${hamOpen ? 'pl-10 mdmax:pl-0' : 'pl-20'} `} 
          onClick={() => setHamOpen(false)}
        >
          {activeComponent === 'userProfile' && < MobileProfile />}
          {activeComponent === 'userEventDetails' && <MobileParticipation />}
          {activeComponent === 'userTeams' && <MobileTeams />}
        </div>
     </>


  )
}

export default MobileDasboard