import React, { useState, useEffect } from 'react';

const UpdateCourse = ({ course, onUpdate, onCancel }) => {
  const [name, setName] = useState(course.name);
  const [description, setDescription] = useState(course.description);
  const [grade, setGrade] = useState(course.grade);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(course.id, { name, description, grade });
  };

  return (
    <div className="update-course-form">
      <h2>Update Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Grade</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateCourse;
