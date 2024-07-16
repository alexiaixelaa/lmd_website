/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import logo from '../../assets/lmd_logo.png'

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <img src={logo} width='100' height='100' alt='Loving Maggies Daycare logo' className='logo'/>
        <ul>
            <li className='nav-link'>
              <a href='#home'>Home</a>
              </li>
            <li className='nav-link'>
              <a href='#about-us'>About Us</a>
              </li>
            <li className='nav-link'>
              <a href='#programs'>Programs</a>
              </li>
            <li className='nav-link'>
              <a href='#virtual-tour'>Virtual Tour</a>
              </li>
            <li className='nav-link'>
              <a href='#schedule'>Schedule</a>
              </li>
            <li className='nav-link'>
              <a href='#parents'>Parents</a>
              </li>
            <li className='nav-link'>
              <a href='#contact-us'>Contact Us</a>
              </li>
        </ul>

    </nav>
  )
}

export default Navbar