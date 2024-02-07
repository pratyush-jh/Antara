import React from 'react'
import Events from '../Components/Events/Events'
import { useEffect, useState } from 'react';
import Api from '../Functions/api';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
const EventsPage = () => {

  return (
    <>
      <Events />
    </>
  )
}

export default EventsPage