import React from 'react'
import './Bottom.css'
import { useState } from 'react';
import Bg from '../../assets/bg-bottom.jpg'
import Bg1 from '../../assets/bg-bottom1.jpg'
import Bg2 from '../../assets/bg-bottom2.jpg'
import Bg3 from '../../assets/bg-bottom3.jpg'
import { MobilePara } from '../../Functions/Constants';
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
      
      <img className='source opacity-70' src={Bg1}>
      </img>

     </div>
     <div className="text">
          <span data-text="Curious about Arohana?"></span>
     </div>
      
        <p className={` absolute text-white m-28 p-10 rounded-lg ${ !isChecked ? 'opacity-0' :''} duration-500  transition-all`}  style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
          {MobilePara}
        </p>
      
     </div>    
    </>
  )
}

export default BottomPage