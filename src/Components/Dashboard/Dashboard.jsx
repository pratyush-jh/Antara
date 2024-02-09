import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Api from '../../Functions/api';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import UserEventDetails from './UserEventDetails';
import UserTeams from './UserTeams';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Dashboard.scss';

const Dashboard = () => {
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

  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh(); // This line will refresh AOS and cause animations to trigger again
  }, []);

  if (user.length === 0) {
    return <div className='dashboard-hero flex justify-center items-center text-white'>
    </div>;
  }


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
      <div className="flex" data-aos="fade-up">
        <div className={`${!hamOpen? 'w-0 mdmax:w-0' :'w-1/5 mdmax:w-screen'}` } >
            {
              !hamOpen? <div></div>:
              <div className=' bg-black h-screen dashboard-left' >
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
                Team Details
              </button>
              <button 
                className={`glow-on-hover ${activeComponent === 'userTeams' ? 'open' : 'close'}`} 
                onClick={() => setActiveComponent('userTeams')}
              >
                Teams
              </button>

              <div className='flex gap-1 absolute top-60 '>
                <TypeAnimation
                  sequence={[
                    `Namaste ${user?.name.split(' ')[0]} 🙏`,
                    4000, 
                    `Hola ${user?.name.split(' ')[0]} 👋`,
                    4000,
                    `Hello ${user?.name.split(' ')[0]} 👐`,
                    4000,
                    `Bonjour ${user?.name.split(' ')[0]} 👋`,
                    4000
                  ]}
                  wrapper="span"
                  speed={10}
                  
                  style={{ fontSize: '20px', display: 'inline-block', width: '300px' , padding: '10px' , color: 'white',
                  textAlign: 'center', fontWeight: 'bold', fontFamily: 'Berkshire Swash ', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px'  

                }}
                  repeat={Infinity}
                />
              </div>
              </div>
            }
        </div>
        <div 
          className={`dashboard-body ${hamOpen ? 'w-4/5 mdmax:w-0' : 'w-full mdmax:w-full'} ${hamOpen ? 'pl-10 mdmax:pl-0' : 'pl-20'} `} 
          onClick={() => setHamOpen(false)}
        >
          {activeComponent === 'userProfile' && <UserProfile user={user} />}
          {activeComponent === 'userEventDetails' && <UserEventDetails />}
          {activeComponent === 'userTeams' && <UserTeams />}
        </div>
      </div>
    </>
  )
}

export default Dashboard