import React from 'react'
import { useEffect , useState } from 'react';
import EventsCards from './EventsCards'
import { useNavigate } from 'react-router-dom';
import ApiCall from '../../Functions/ApiCall';
import { API_URL } from '../../Functions/Constants';

const Events = () => {
  const navigate = useNavigate();
  const {isVerified} = ApiCall();

  const [events, setEvents] = useState([]);
  useEffect(() => {
    const events = async () => {
      try {
        const response = await fetch(`${API_URL}/competitions`);
        const data = await response.json();
        setEvents(data);
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    events();
  } , []);
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