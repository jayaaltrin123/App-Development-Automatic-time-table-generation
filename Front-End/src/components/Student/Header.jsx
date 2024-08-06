import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logoAdmin from '../../assets/images/logoAdmin.jpeg'
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoAdmin} alt="Logo" />
       
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/student">Main</Link></li>
          <li><Link to="/student/viewTimeTable">Timetable</Link></li>
          <li><Link to="/student/UpdateProfile">Update Profile</Link></li>
          <li><Link to="/student/PersonalDetail">My Profile</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
