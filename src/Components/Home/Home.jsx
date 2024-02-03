import React, { useState, useEffect } from 'react';
import HomeFunction from '../../Functions/Home';

const Home = () => {

  const {countdown, linkStyle } = HomeFunction();

  return (
    <div>
      <a href="https://www.google.com" target="_blank" className={`ml-3 ${linkStyle}`}>
        Register
      </a>
      <div className={`mr-3 ${linkStyle} float-right`}>{countdown}</div>
    </div>
  );
};

export default Home;
