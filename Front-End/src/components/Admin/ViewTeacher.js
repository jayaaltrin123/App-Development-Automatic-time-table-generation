import React from 'react';
import './ViewTeacher.css';

const ViewTeacher = ({ teachers, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index); // Call the delete function passed from the parent
  };

  return (
    <div>
      <center><h1>Teacher Management</h1></center>
      <div className="teacher-table">
        <center><h2>All Teachers</h2></center>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Phone No</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index}>
                <td>{teacher.firstName}</td>
                <td>{teacher.lastName}</td>
                <td>{teacher.email}</td>
                <td>{teacher.phone}</td>
                <td>{teacher.address}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTeacher;
