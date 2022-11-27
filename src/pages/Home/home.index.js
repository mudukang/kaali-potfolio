// import { Routes, Route } from "react-router-dom";

import NavBar from '../../components/NavBar';
import IntroContainer from '../../components/IntroContainer'
// import Contacts from '../../components/Contacts'

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
