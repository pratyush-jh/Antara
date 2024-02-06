import React from 'react'
import { useEffect , useState } from 'react';
import EventsCards from './EventsCards'
import { useNavigate } from 'react-router-dom';


const Events = () => {
  const navigate = useNavigate();

  

  return (
     <div>
          <div>
               <h1>Events</h1>
          </div>
       {/* <EventsCards /> */}
     </div>
  )
}

export default Events