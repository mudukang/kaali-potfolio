import React from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { brown } from '@mui/material/colors';

// import mainImage from '/main.png'
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(brown[50]),
  backgroundColor: brown[50],
  '&:hover': {
    backgroundColor: brown[100],
  },
}));

const IntroContainer = () => {
  return (
    <>
      <div className='image'>
        <img src="/main.png" alt="" />
        <h1>JERGIO KALIE</h1>
      </div>
      <div className='intro-right'>
        <div className='main-title'>
          <h1>GET UP. </h1>
          <h2>GET BETTER.</h2>
          <h2>GET FIT, EVERYDAY.</h2>
        </div>
        <div className="main-intro">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo odit aperiam dolore suscipit exercitationem corporis quam voluptatem illo excepturi, rem molestias maiores.</p>
          <ColorButton variant="contained">GET IN TOUCH</ColorButton>
        </div>
      </div>
    </>
  );
}

export default IntroContainer;
