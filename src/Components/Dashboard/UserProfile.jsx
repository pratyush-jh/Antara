import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
const UserProfile = ({user}) => {
     console.log(user)
  return (
    <div>
      
      <div>
        <p className='text-6xl font-sans font-semibold pad-1 text-amber-950'>User Profile</p> <br /> <hr /> <br />
        
        <ul>
          <li><p className='flex p-pad font-sans text-2xl '><strong className="pad-2 profile-text"> Email Verification Status:</strong>{user.email_verified_at == null ?
          <div>
           <Link to="/verify" className='verify-btn'> Verify Email</Link>
          </div> : "Verified"}
        
          </p></li>

        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>ID : </strong>{user.id}</p></li>
        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>Name : </strong>{user.name}</p></li>
        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>Email : </strong>{user.email}</p></li>
        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>Phone Number : </strong>{}</p></li>
        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>College Name : </strong>{}</p></li>
        <li><p className='p-pad font-sans text-2xl '><strong className='profile-text-2'>User QR : </strong>{}</p></li>
        <li><p className='p-pad-2 font-sans text-2xl '><strong className='profile-text-2'>Account Created on : </strong>{}</p></li>
      
        </ul>
      </div>
      
      <br /> <hr /> <br />

      

    </div>
  )
}

export default UserProfile