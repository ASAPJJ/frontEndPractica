import React from 'react'
import '../assets/styles/Navbar.css'
import logoEjemplo from '../assets/img/logoEjemplo.jpg'

function Navbar() {
  return (
    <div>
        <img src={logoEjemplo} 
        alt="Logo" 
        className='logo'/>
      <nav>
        <input 
        type="text" 
        />
        <ul>
          <li><a href="#">ejemplo</a></li>
          <li><a href="#">ejemplo</a></li>
          <li><a href="#">ejemplo</a></li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar