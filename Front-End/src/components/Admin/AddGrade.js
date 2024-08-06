import React, { useState } from 'react';
import './AddGrade.css';

const AddGrade = ({ addGrade }) => {
  const [gradeName, setGradeName] = useState('');
  const [gradeDescription, setGradeDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addGrade(gradeName, gradeDescription);
    setGradeName('');
    setGradeDescription('');
  };

  return (
    <div className="add-grade-form">
      <h2>Add Grade</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="gradeName">Grade Name</label>
          <input
            type="text"
            id="gradeName"
            value={gradeName}
            onChange={(e) => setGradeName(e.target.value)}
            placeholder="Enter grade name..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gradeDescription">Grade Description</label>
          <textarea
            id="gradeDescription"
            value={gradeDescription}
            onChange={(e) => setGradeDescription(e.target.value)}
            placeholder="Enter grade description..."
            required
          />
        </div>
        <button type="submit">Add Grade</button>
      </form>
    </div>
  );
};

export default AddGrade;
