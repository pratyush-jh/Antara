import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Api from '../../Functions/api';
import { TypeAnimation } from 'react-type-animation';
import { Link ,Element} from 'react-scroll';
import UserProfile from './UserProfile';
import UserEventDetails from './UserEventDetails';
import UserTeams from './UserTeams';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Welcome from './Welcome';
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
      <div className=' absolute top-5'>
      <div className={`hamburger ${hamOpen? 'is-active' :''} `} onClick={() => setHamOpen(!hamOpen)}>
          <div className="hamburger__container">
            <div className="hamburger__inner"></div>
            <div className="hamburger__hidden"></div>
          </div>
        </div>   
      </div>

      <div className="flex  " data-aos="fade-up">
        <div className={`${!hamOpen? 'w-0 mdmax:w-0' :'w-1/5 mdmax:w-screen'} dashboard-left-body` } >
            {
              !hamOpen? <div></div>:
              <div className='h-screen dashboard-left flex items-center' >
              <div className=''>
                <button
                  onClick={() => setActiveComponent('userProfile')}
                  className={`glow-on-hover ${activeComponent === 'userProfile' ? 'open' : 'close'}`}
                >
                  <p>Profile</p>
                </button>
                <button 
                  onClick={() => setActiveComponent('userEventDetails')}
                  className={` glow-on-hover ${activeComponent === 'userEventDetails' ? 'open' : 'close'}`} 
                >
                  <p>Event Details</p>
                </button>
                <button
                  onClick={() => setActiveComponent('userTeams')}
                  className={`glow-on-hover ${activeComponent === 'userTeams' ? 'open' : 'close'}`}
                >
                  <p>Teams</p>
                </button>
                </div>
      
              <div className='flex gap-1 absolute top-10 '>
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
                  
                  style={{ fontSize: '20px', display: 'inline-block', width: '300px' , padding: '10px' , color: 'black',
                  textAlign: 'center', fontWeight: 'bold', fontFamily: 'Berkshire Swash ', borderRadius: '10px'  

                }}
                  repeat={Infinity}
                />
                
              </div>
              </div>
            }
        </div>
        <div 
          className={`dashboard-body ${hamOpen ? 'w-4/5 mdmax:w-0' : 'w-full mdmax:w-full ml-10'} ${hamOpen ? 'pl-10 mdmax:pl-0 maxHieght' : 'pl-10'} `} 
          onClick={() => setHamOpen(false)}
        >
          <Welcome user={user} />
            {activeComponent === 'userProfile' && <UserProfile user={user} />}
            {activeComponent === 'userEventDetails' && <UserEventDetails user={user} />}
            {activeComponent === 'userTeams' && <UserTeams user={user} />}
        </div>
      </div>
    </>
  )
}

export default Dashboard