import React from 'react'
import './NavBar.css'

export default function NavBar({active = "home"}) {
  console.log(active  === 'home' ? 'active': '');
  console.log(active);
  return (
    <div className="nav-bar">
      <div className='logo'></div>
      <ul>
        <li><a href='/' className={`${active  === 'home' ? 'active': ''}`}>Home</a></li>
        <li><a href='/awards' className={`${active  === 'award' ? 'active': ''}`}>Awards</a></li>
        <li><a href='/contact' className={`${active  === 'contact' ? 'active': ''}`}>Contact</a></li>
        {/* <li><a href="sponser"></a>Sponsers</li> */}
      </ul>
    </div>

  )
}
