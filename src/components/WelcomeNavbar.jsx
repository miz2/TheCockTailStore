import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUser } from "react-icons/fa";
import './NavbarWelcome.css';
import { IoLogOut } from "react-icons/io5";

export default function Navbar(props) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav className='navbar'>
      <div className='navbar-center'>
        <div className='navbar-header'>
          <Link to='/'>
            <img src={logo} alt='cocktail db logo' className='navbar-logo' />
          </Link>
        </div>

        {/* Navbar links or buttons */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to='/' onClick={handleMenuClick}>{props.Home}</Link>
          </li>
          <li>
            <Link to='/about' onClick={handleMenuClick}>{props.About}</Link>
          </li>
        </ul>

        <div className={`navbar-buttons ${menuOpen ? 'active' : ''}`}>
          {!isAuthenticated ? (
            <button className='navbar-btn' onClick={() => loginWithRedirect()}>
              <FaUser className='navbar-login' size='25px' />
            </button>
          ) : (
            <div className='navbar-user'>
              <span className='navbar-welcome'>{user.name ? `Welcome, ${user.name}!` : 'Welcome!'}</span>
              <button className='navbar-btn' onClick={() => logout({ returnTo: window.location.origin })}>
                <IoLogOut className='logout-btn-fa' size="33px"/>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
