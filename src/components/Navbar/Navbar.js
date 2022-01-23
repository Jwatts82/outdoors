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
          <NavLink to='/Parks' className='a'>
            Parks
          </NavLink>
          <NavLink to='/Trails' className='a'>
            Trails
          </NavLink>
          <NavLink to='/Camping' className='a'>
            Camping
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
