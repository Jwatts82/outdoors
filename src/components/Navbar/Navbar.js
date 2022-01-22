import React, { Component } from 'react';
import './Navbar.css'


class Navbar extends Component {

  render() {
    return (
      <nav className='nav'>
        <div className='container'>
          <h1 className='logo'>
            <a href='#'>Outdoors</a>
          </h1>
          <ul>
            <li>
              <a href='#' className='current'>
                Home
              </a>
            </li>
            <li>
              <a href='#'>About</a>
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
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
