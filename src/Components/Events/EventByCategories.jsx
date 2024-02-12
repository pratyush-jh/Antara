import React from 'react'
import { useEffect , useState } from 'react';
import EventsCards from './EventsCards'
import { useNavigate, useParams,Link } from 'react-router-dom';
import Api from '../../Functions/api';
import CategoryCard from './CategorieCard';

const EventByCategories = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchApi } = Api();
  useEffect(() => {
    const result = fetchApi('GET', `api/competitions`, 'events');
    result.then(response => {
      if (response?.status === 200) {
        setEvents(response?.data?.data);
      }
    });
  }
  , []);
  return (
     <div className='flex flex-wrap gap-4 justify-center pt-20'
     >
        {
          events.map((category)=>{
            return  <CategoryCard eventname={category} key={category.id}  />
          })
        }
     </div>
  )
}

export default EventByCategories