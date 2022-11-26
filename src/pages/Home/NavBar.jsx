import React from 'react'
import '../Home/css/NavBar.css'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className='logo'></div>
      <ul>
        <li className='active'>Home</li>
        <li>Awards</li>
        <li>Contact</li>
        <li>Sponsers</li>
      </ul>
    </div>

  )
}
