/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import logo from '../../assets/lmd_logo.png'

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <img src={logo} width='100' height='100' alt='Loving Maggies Daycare logo' className='logo'/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Programs</li>
            <li>Virtual Tour</li>
            <li>Schedule</li>
            <li>Parents</li>
            <li>Contact Us</li>
        </ul>

    </nav>
  )
}

export default Navbar