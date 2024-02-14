import React from 'react'
import { useEffect , useState } from 'react';
import EventsCards from './EventsCards'
import { useNavigate, useParams,Link } from 'react-router-dom';
import Api from '../../Functions/api';
import CategoryCard from './CategorieCard';

// * event according to categories

const EventByCategories = () => {
  const [events, setEvents] = useState([]);
  const { id } = useParams();
  const { fetchApi } = Api();
  useEffect(() => {
    const result = fetchApi('GET', `api/category-competitions/${id}` , 'events');
    result.then(response => {
      if (response?.status === 200) {
        setEvents(response?.data?.data );
      }
    });
  }
  , []);
  return (
     <div className='flex flex-wrap gap-4 justify-start p-20 mdmax:p-5 mdmax:justify-center'
     >
        {
          events.map((category)=>{
            return <CategoryCard eventname={category} key={category.id} />
          })
        }
     </div>
  )
}

export default EventByCategories