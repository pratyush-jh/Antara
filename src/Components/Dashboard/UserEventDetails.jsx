import React from 'react'
import './dashboard.css';

const UserEventDetails = () => {
  return (
    <div data-aos="fade-left">
      <div>
        <h1 className='text-6xl font-sans font-semibold pad-1 text-amber-950'>Team Details</h1> <br /><hr /><br />
        
        <ul>

        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>Your Teams : </strong>{}</p></li>
        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>Team Code : </strong>{}</p></li>
        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>Other Members : </strong>{}</p></li>
        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>Participated in : </strong>{}</p></li>
        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>Restriction Status : </strong>{}</p></li>
      
        </ul>
      </div>

      <br /> <hr /> <br />

      {/* <div>
        <p className='text-4xl font-semibold'>Participations</p>
        <p>Events you have participated in - </p>
      </div> */}

    </div>

  )
}

export default UserEventDetails