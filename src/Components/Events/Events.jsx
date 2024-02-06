import React from 'react'
import { useEffect , useState } from 'react';
import EventsCards from './EventsCards'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../Functions/Constants';

const Events = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

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