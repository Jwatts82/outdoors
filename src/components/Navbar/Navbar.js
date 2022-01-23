import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <h1 className='logo'>
          <a href='#'>Outdoors</a>
        </h1>
        <ul>
          <NavLink to='/' className='a'>
            Home
          </NavLink>
          <NavLink to='/States' className='a'>
            States
          </NavLink>
          <NavLink to='/Trails' className='a'>
            Trails
          </NavLink>
          <NavLink to='/Camping' className='a'>
            Camping
          </NavLink>
        </ul>
        {/* <ul>
              <li>
                <a href='#' className='current'>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Parks</a>
              </li>
              <li>
                <a href='#'>Trails</a>
              </li>
              <li>
                <a href='#'>Favorites</a>
              </li>
              <li>
                <a href='#'>Log In</a>
              </li>
              <li>
                <a href='#'>Sign Up</a>
              </li>
            </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
