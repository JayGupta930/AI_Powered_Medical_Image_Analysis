import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__logo' onClick={() => window.location.href = '/home'}>
            <img src='/assets/logo.svg' alt='AI Healthcare Logo' />
        </div>
        <div className='navbar__links'>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/upload" className={({ isActive }) => isActive ? 'active' : ''}>Upload</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/chatbot" className={({ isActive }) => isActive ? 'active' : ''}>Chatbot</NavLink>
        </div>
    </nav>
  )
}

export default Navbar
