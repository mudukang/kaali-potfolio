import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className='logo'></div>
      <ul>
        <li><a href='/' className='active'>Home</a></li>
        <li><a href='/awards'>Awards</a></li>
        <li><a href='/contact'>Contact</a></li>
        {/* <li><a href="sponser"></a>Sponsers</li> */}
      </ul>
    </div>

  )
}
