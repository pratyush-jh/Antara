import React from 'react'
import { useEffect , useState } from 'react';
import EventsCards from './EventsCards'
import { useNavigate } from 'react-router-dom';
import ApiCall from '../../Functions/ApiCall';

const Events = () => {
  const navigate = useNavigate();
  const {isVerified} = ApiCall();
  useEffect(() => {
    const checkAndNavigate = async () => {
      const result = isVerified;
      console.log("the current state is " + result);
      if (!result) {
        navigate('/verify');
      }
    };
    checkAndNavigate();
  }, [navigate]);
  return (
     <div>


          <div>
               <h1>Events</h1>
          </div>
       <EventsCards />
     </div>
  )
}

export default Events