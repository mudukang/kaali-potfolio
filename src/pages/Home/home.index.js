import IntroContainer from '../../components/IntroContainer'
import NavBar from './NavBar';

import React from 'react';

const HomeIndex = () => {
  return (
    <div className='background'>
      <div className="topbar-container">
        <NavBar />
      </div>
      <div className="intro-container">
        <IntroContainer />
      </div>
      <div className='bottombar-container'></div>
    </div>
  );
}

export default HomeIndex;
