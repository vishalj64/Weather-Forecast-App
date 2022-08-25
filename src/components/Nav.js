import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.gif';
import './Nav.css';

const Nav = () => {
    return (
      <nav className="nav-area">
        <Link className="logo-container" to="/">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="app-name-logo">Weather Forecast App</h3>
        </Link>
        <div className="menu-container">
          <ul className="menu">
            <li><Link to="/" className="menu-option-style">Home</Link></li>
            <li><Link to="/weatherForecast" className="menu-option-style">Get Weather</Link></li>
            <li><Link to="/convertor" className="menu-option-style">Temperature Convertor</Link></li>
          </ul>
        </div>
      </nav>
    );
  }

export default Nav;
