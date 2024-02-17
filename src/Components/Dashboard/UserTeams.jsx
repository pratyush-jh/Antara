import React from 'react'
import './dashboard.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Api from '../../Functions/api';
import { useEffect, useState } from 'react';
import Spinner2 from '../ShimmerAndSpinner/Spinner2';

const UserTeams = ({user}) => {
  const navigate = useNavigate();
  const { authUser, fetchApi } = Api();
  const [step , setStep] = useState(1);
  const [participatedEvents, setParticipatedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  if (user?.length === 0) {
    return < Spinner2 />; 
  }
// * Uncomment this code after working on this section 


//  useEffect(() => {
//   if(user?.email_verified_at === null){
//     setStep(2);
//   } else if(user?.email_verified_at !== null && user?.is_verified == null){
//     setStep(3);
//   }
//   else if(user?.email_verified_at !== null && user?.is_verified == true){
//     setStep(4);
//     fetchApi('get', `api/my-team`).then((data) => {
//       setParticipatedEvents(data?.data);
//       setIsLoading(false);
//     });
//   }
//   }
//   , [user]);


// * Have to delete this code later on
useEffect(() => {
  fetchApi('get', `api/my-team`).then((data) => {
    setParticipatedEvents(data?.data);
    setIsLoading(false);
  }
  );
}, [user]);

if(isLoading){
  return <div className= 'absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
    <Spinner2 />
  </div>;
}

if(step ==2){
  return (
    <div className='flex flex-col items-center gap-10 justify-center'>
    <p>
      Please verify your email to continue
    </p>
    <Link to = {'/verify'} target='_blanc' className=' bg-black p-2 rounded-lg text-white hover:bg-teal-600 transition-all duration-500 '>Verify Email</Link>
  </div>
  )
}

if(step ==3){
  return (
    <div className='flex flex-col items-center justify-center pt-20'>
    <p>
      Your email has been verified, please wait for the admin to verify your account and Sponshirship tasks.
    </p>
  </div>
  )
}


if(participatedEvents?.length === 0){
  return (
    <div className='flex flex-col items-center justify-center pt-20'>
    <p>
      You are not in any team yet, please participate in the events to join a team.
    </p>
    <Link className= 'bg-black p-2 rounded-lg text-white hover:bg-teal-600 transition-all duration-500' to = {'/events'}
    >
        Participate Now 
    </Link>
  </div>
  )
}


  console.log(participatedEvents);
  return (
    <>
      <h1>Here Are the details of the events you have participated in:
      </h1>
    
    </>
  )
}

export default UserTeams