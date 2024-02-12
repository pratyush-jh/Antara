import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero/Hero';
const DesktopHome = () => {

  return (
    <div  className='-z-10 overflow-hidden' >        
      <Hero />
    </div>
  );
};

export default DesktopHome;
