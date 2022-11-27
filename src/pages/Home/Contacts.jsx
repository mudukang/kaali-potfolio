import React from 'react';
import {FaFacebook, FaEnvelope, faMobile, FaMobile} from 'react-icons/fa'

import NavBar from '../../components/NavBar';

const Contacts = () => {
  return (
    <div className='background'>
      <div className="topbar-container">
        <NavBar />
      </div>
      <div className="intro-container">
        <div className="details-container">
          <ul>
            <li><FaEnvelope /><a href='mailto:Jergiokali199641@icloud.com'> Jergiokali199641@icloud.com</a></li>
            <li><FaMobile /> <a href='tel:+94768384202'>+94768384202</a></li>
            <li><FaFacebook /><a href='https://www.facebook.com/jerigokali?mibextid=LQQJ4d' target="blank"> Facebook</a></li>
          </ul>
        </div>
        <div className="form-containe">
           
        </div>
      </div>
      <div className='bottombar-container'></div>
    </div>
  );
}

export default Contacts;
