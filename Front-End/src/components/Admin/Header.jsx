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
          <li><Link to="/admin">Main</Link></li>
          <li><Link to="/grades/viTimeTable">View Timetable</Link></li>
          <li><Link to="/grades/addGrade">Add Grade</Link></li>
          <li><Link to="/grades/viewGrade">View Grades</Link></li>
          <li><Link to="/grades/addCourse">Add Course</Link></li>
          <li><Link to="/grades/viewCourse">View Courses</Link></li>
          <li><Link to="/grades/addBatch">Add Batch</Link></li>
          <li><Link to="/grades/viewBatch">View Batches</Link></li>
          <li><Link to="/grades/addTeacher">Register Teacher</Link></li>
          <li><Link to="/grades/viewTeacher">View Teachers</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
