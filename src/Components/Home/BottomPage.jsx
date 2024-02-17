import React from 'react'
import './Bottom.css'
import { useState } from 'react';
import Bg from '../../assets/bg-bottom.jpg'
const BottomPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
    
    <div className="bottomPage">
    <input type="checkbox" onChange={handleCheckboxChange} />

     <div className="video">
      
      <video src={Bg}>
      </video>

     </div>
     <div className="text">
          <span data-text="What is Arohana?"></span>
     </div>
      {
        isChecked && 
        <p className=' absolute'>
          Arohana is a platform that connects people who are looking for a place to stay with those who are looking for a tenant
        </p>
      }
     </div>    
    </>
  )
}

export default BottomPage