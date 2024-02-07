import React from 'react'
import { useEffect , useState } from 'react';
import EventsCards from './EventsCards'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../Functions/Constants';

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const  fetchEvents = async () => {
      const response = await axios.get(`${API_URL}/api/competitions`);
      const data = response.data;
      setEvents(data.data);
    }
    fetchEvents();
  }
  , []);
  console.log(events);
  return (
     <div className='flex flex-wrap gap-4 justify-center pt-20'
     >
        {
          events.map((eventname)=>{
            return <EventsCards key={eventname.id} eventname={eventname} />
          })
        }
     </div>
  )
}

export default Events