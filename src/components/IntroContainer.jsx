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
          <h2>DON'T BE SCARED TO</h2>
          <h1>LIFT HEAVY! </h1>
          {/* <h2>GET FIT, EVERYDAY.</h2> */}
        </div>
        <div className="main-intro">
          <p>The meaning of life is not simply to exist,<br></br> to survive, but to move ahead,<br></br> to go up,<br></br> to conquer. </p>
          <ColorButton variant="contained">GET IN TOUCH</ColorButton>
        </div>
      </div>
    </>
  );
}

export default IntroContainer;
