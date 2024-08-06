import React, { useState } from 'react';
import './AddCourse.css'; // Import the CSS file

const AddCourse = ({ onAddCourse, grades = [] }) => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      name: courseName,
      description: courseDescription,
      grade: grade,
    };
    onAddCourse(newCourse);
    setCourseName('');
    setCourseDescription('');
    setGrade('');
  };

  return (
    <div>
      <div className="add-course-form">
        <h2>Add Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Course Name</label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Course Description</label>
            <textarea
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Grade</label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            >
              <option value="">Select Grade</option>
              {grades.map((g) => (
                <option key={g.id} value={g.name}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
