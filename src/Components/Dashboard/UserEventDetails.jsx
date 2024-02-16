import React from 'react'
import './dashboard.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Api from '../../Functions/api';
import { useEffect, useState } from 'react';
import Spinner2 from '../ShimmerAndSpinner/Spinner2';

const UserEventDetails = ({user}) => {
  const navigate = useNavigate();
  const { authUser, fetchApi } = Api();
  const [step , setStep] = useState(1);
  console.log(user);
  const [participatedEvents, setParticipatedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  if (user?.length === 0) {
    return < Spinner2 />; 
  }
 useEffect(() => {
  if(user?.email_verified_at === null){
    setStep(2);
  } else if(user?.email_verified_at !== null && user?.is_verified == null){
    setStep(3);
  }
  else if(user?.email_verified_at !== null && user?.is_verified == true){
    setStep(4);
    fetchApi('get', `user/${user?.id}/participated-events`).then((data) => {
      setParticipatedEvents(data?.data);
      setIsLoading(false);
    });
  }
  }
  , [user]);
  console.log(participatedEvents);
  return (
    <div data-aos="fade-left">
      {step === 2 && 
      
      <div className='flex flex-col items-center gap-10 justify-center'>
        <p>
          Please verify your email to continue
        </p>
        <Link to = {'/verify'} target='_blanc' className=' bg-black p-2 rounded-lg text-white hover:bg-teal-600 transition-all duration-500 '>Verify Email</Link>
      </div>
      }

      {step === 3 &&
      <div className='flex flex-col items-center justify-center pt-20'>
        <p>
          Your email has been verified, please wait for the admin to verify your account and Sponshirship tasks.
        </p>
      </div>
      }

    </div>

  )
}

export default UserEventDetails