import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <img src='/logo.png' alt='Logo' />
        </div>
        <div className='navbar__links'>
            <Link to="/home">Home</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/about">About</Link>
            <Link to="/chatbot">Chatbot</Link>
        </div>
    </nav>
  )
}

export default Navbar
