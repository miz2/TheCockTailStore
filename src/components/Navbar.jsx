import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUser } from "react-icons/fa";
import SearchForm from './SearchForm';
import { IoLogOut } from "react-icons/io5";
import './Navbar.css'; // Adjust the CSS file name as per your actual file

export default function Navbar({ Home = 'Home', About = 'About' }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className='navbar'>
      <div className='navbar-center'>
        <div className='navbar-header'>
          <Link to='/'>
            <img src={logo} alt='cocktail db logo' className='navbar-logo' />
          </Link>
        </div>

        <ul className='navbar-links'>
          {/* Display Home and About links only for smaller devices */}
          <li className='navbar-links-small'>
            <Link to='/'>{Home}</Link>
          </li>
          <li className='navbar-links-small'>
            <Link to='/about'>{About}</Link>
          </li>
        </ul>

        <SearchForm />

        <div className='navbar-buttons'>
          {!isAuthenticated ? (
            <button className='navbar-btn' onClick={() => loginWithRedirect()}>
              <FaUser className='navbar-login' size='25px' />
            </button>
          ) : (
            <div className='navbar-user'>
              <span className='navbar-welcome'>{user.name ? `Welcome, ${user.name}!` : 'Welcome!'}</span>
              <button className='navbar-btn' onClick={() => logout({ returnTo: window.location.origin })}>
                <IoLogOut className='logout-btn-fa' size="33px" />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
