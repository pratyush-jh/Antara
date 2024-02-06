import React from 'react'
import Events from '../Components/Events/Events'
import { useEffect, useState } from 'react';
import { fetchEvents } from '../Functions/Constants';
import { useNavigate } from 'react-router-dom';
const EventsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchEvents().then((data) => {
      setUser(data.data);
    })
  }, []);

  useEffect(() => {
    if(user.email_verified_at === null){
      navigate(`/verify`);
    }
  }, [user]);

  if(user.length === 0){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <>
      <Events />
    </>
  )
}

export default EventsPage