import React , {useEffect, useState}from 'react';
import './Hero.css'; // Assuming you have a separate CSS file for styles
import Bg1 from '../../assets/Image/bg-1.jpg';
import Bg2 from '../../assets/Image/bg-2.jpg';
import Bg3 from '../../assets/Image/bg-3.jpg';
import Leave from '../../assets/Flowers/leaves.png';
import Img1 from '../../assets/Flowers/pngwing.com (1).png';
import Img2 from '../../assets/Flowers/pngwing.com (2).png';
import Img3 from '../../assets/Flowers/pngwing.com (3).png'; 
import Img4 from '../../assets/Flowers/pngwing.com (4).png';
import Img5 from '../../assets/Flowers/pngwing.com (5).png';
import Img6 from '../../assets/Flowers/pngwing.com (6).png';
import Img7 from '../../assets/Flowers/pngwing.com (7).png';
import Img8 from '../../assets/Flowers/pngwing.com (8).png';
import Img9 from '../../assets/Flowers/pngwing.com (9).png';
import Img10 from '../../assets/Flowers/pngwing.com (10).png';
import Img11 from '../../assets/Flowers/pngwing.com (11).png';
import Img12 from '../../assets/Flowers/pngwing.com (12).png';
import Img13 from '../../assets/Flowers/pngwing.com (13).png';
import Img14 from '../../assets/Flowers/pngwing.com (14).png';
import Img15 from '../../assets/Flowers/pngwing.com (15).png';
import Other1 from '../../assets/Flowers/Other/pngegg.png';
import Other2 from '../../assets/Flowers/Other/pngegg (1).png';
import Other3 from '../../assets/Flowers/Other/pngegg (2).png';
import Other4 from '../../assets/Flowers/Other/pngegg (3).png';
import Other5 from '../../assets/Flowers/Other/pngegg (4).png';
import Other6 from '../../assets/Flowers/Other/pngegg (5).png';
import Other7 from '../../assets/Flowers/Other/pngegg (6).png';
import Other8 from '../../assets/Flowers/Other/pngegg (7).png';
import Other9 from '../../assets/Flowers/Other/pngegg (8).png';

const Hero = () => {
  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);
  return ( 
    <div className='hero-container h-screen -z-10 w-screen flex items-center justify-center overflow-hidden'>
      <div className="content -z-50">
        <h1 className='heading-animation'>AROHANA</h1>
      </div>
      <div className='-z-10'>
          <img src={Img6} alt=""  className=' images flower1' />
          <img src={Img10} alt=""  className=' images flower2 ' />
          <img src={Img11} alt=""  className=' images flower3' />
          <img src={Img13} alt=""  className=' images flower4' />
          <img src={Img9} alt=""  className=' images flower5' />
          <img src={Img9} alt=""  className=' images flower8' />
          <img src={Img10} alt=""  className=' images flower6' />
          <img src={Img6} alt=""  className=' images flower7' />
          <img src={Img14} alt=""  className=' images flower9' />
          <img src={Img9} alt=""  className=' images flower10' />
          <img src={Img9} alt=""  className=' images flower11' />
          <img src={Img9} alt=""  className=' images flower12' />
      </div>
    </div>
    
  );
}

export default Hero;
