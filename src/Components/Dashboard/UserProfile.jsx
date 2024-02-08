import React from 'react'
import { Link } from 'react-router-dom'
const UserProfile = ({user}) => {
     console.log(user)
  return (
    <div>UserProfile
     <p className=' flex '> Email verification status : {user.email_verified_at == null ? <div>
           <Link to="/verify" className=' pl-2 text-orange-600'>Verify Email</Link>
     </div> : "Verified" 
     } </p>
     <p>
      {user.email}
     </p>
    </div>
  )
}

export default UserProfile