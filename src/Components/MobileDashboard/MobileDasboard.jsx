import React from 'react'
import Api from '../../Functions/api'
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
             setUser(data);
           })
           setIsLoggedIn(true);
         }
       };
       checkAndNavigate();
     }, [navigate]);
     useEffect(() => {
      document.querySelectorAll('button').forEach(button => {
        button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>';
      });
    }, [navigate, hamOpen, activeComponent, user]);

  return (
     <>
            <div className="z-30 flex justify-between  pr-48  items-center h-16 bg-gradient-to-r to-linear-lightBlue from-linear-darkBlue    text-white dashboard mdmax:pr-0 mdmax:flex-row-reverse" >
           <div className={`hamburger ${hamOpen? 'is-active' :''}`} onClick={() => setHamOpen(!hamOpen)}>
               <div className="hamburger__container">
                 <div className="hamburger__inner"></div>
                 <div className="hamburger__hidden"></div>
               </div>
           </div>
           <h1 className='text-3xl pl-10 select-none font-bold'>
            { activeComponent === 'userProfile' ? 'Profile' : activeComponent === 'userEventDetails' ? 'Participation' : 'Teams'}
           </h1>
            </div>
          <div className={`dashboard-sidebar ${hamOpen ? '  ' : ' hidden'} absolute`} >
           <div className="flex flex-col items-center justify-center h-full
                dashboard-left button-list" >
               <button 
                 className={`button ${activeComponent === 'userProfile' ? 'open' : 'close'}`} 
                 onClick={() =>{
                  setHamOpen(false);
                  setActiveComponent('userProfile')}}
               >
                     Profile
               </button>
               <button 
                 className={` button ${activeComponent === 'userEventDetails' ? 'open' : 'close'}`} 
                 onClick={() => { setHamOpen(false);
                  setActiveComponent('userEventDetails')}}
               >
                     Participation
               </button>
               <button 
                 className={`button  ${activeComponent === 'userTeams' ? 'open' : 'close'}`} 
                 onClick={() => {
                  setHamOpen(false);
                  setActiveComponent('userTeams')}} 
               >
                     Teams
               </button>
          </div>
          </div>
          
     
     <div 
          className={`${hamOpen ? ' hidden':''} 'bg-black`} 
          
        >
        </div>
     </>


  )
}

export default MobileDasboard