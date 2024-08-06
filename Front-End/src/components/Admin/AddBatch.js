import React, { useState } from 'react';
import './AddBatch.css'; // Import the CSS file

const AddBatch = ({ onAddBatch, grades = [] }) => {
  const [batchName, setBatchName] = useState('');
  const [batchDescription, setBatchDescription] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBatch = {
      name: batchName,
      description: batchDescription,
      grade,
      timetable: 'Upload Time Table', // Default timetable value
    };
    onAddBatch(newBatch);
    setBatchName('');
    setBatchDescription('');
    setGrade('');
  };

  return (
    <div>
      <div className="add-course-form">
        <h2>Add Batch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Batch Name</label>
            <input
              type="text"
              value={batchName}
              onChange={(e) => setBatchName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Batch Description</label>
            <textarea
              value={batchDescription}
              onChange={(e) => setBatchDescription(e.target.value)}
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
          <button type="submit">Add Batch</button>
        </form>
      </div>
    </div>
  );
};

export default AddBatch;
