import React, { useState } from 'react';
import './ViewCourse.css';
import UpdateCourse from './UpdateCourse'; // Import the UpdateCourse component

const ViewCourse = ({ courses, updateCourse, deleteCourse }) => {
  const [editingCourse, setEditingCourse] = useState(null);

  const handleUpdateClick = (course) => {
    setEditingCourse(course);
  };

  const handleUpdate = (id, updatedCourse) => {
    updateCourse(id, updatedCourse);
    setEditingCourse(null);
  };

  const handleCancelUpdate = () => {
    setEditingCourse(null);
  };

  const handleDelete = (id) => {
    deleteCourse(id);
  };

  return (
    <div>
      <div>
        <center><h1>All Courses</h1></center>
        {editingCourse && (
          <UpdateCourse
            course={editingCourse}
            onUpdate={handleUpdate}
            onCancel={handleCancelUpdate}
          />
        )}
        <table>
          <thead>
            <tr>
              <th>Course Id</th>
              <th>Course Name</th>
              <th>Description</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>{course.grade}</td>
                <td>
                  <button onClick={() => handleUpdateClick(course)}>Update</button>
                  <button onClick={() => handleDelete(course.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCourse;
