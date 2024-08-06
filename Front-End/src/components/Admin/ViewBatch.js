import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ViewBatch.css'; // Assuming you have some CSS for styling

const ViewBatch = ({ batches, updateBatch, deleteBatch }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleUpdate = (batch) => {
    const updatedName = prompt('Enter new name:', batch.name);
    const updatedDescription = prompt('Enter new description:', batch.description);
    const updatedGrade = prompt('Enter new grade:', batch.grade);

    if (updatedName && updatedDescription && updatedGrade) {
      updateBatch(batch.id, {
        name: updatedName,
        description: updatedDescription,
        grade: updatedGrade,
      });

      // Optionally navigate to GenTable component after updating the batch
      navigate('/grades/viewTimeTable');
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this batch?')) {
      deleteBatch(id);
    }
  };

  const handleUploadTimetable = () => {
    navigate('/grades/viewTimeTable'); // Navigate to GenTable component for uploading timetable
  };

  const handleViewTimetable = () => {
    navigate('/grades/viTimeTable'); // Navigate to ViewTimeTable component for viewing timetable
  };

  return (
    <div className="batches-table">
      <h2>All Batches</h2>
      <table>
        <thead>
          <tr>
            <th>Batch Id</th>
            <th>Batch Name</th>
            <th>Description</th>
            <th>Grade</th>
            <th>Time Table</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {batches.map((batch) => (
            <tr key={batch.id}>
              <td>{batch.id}</td>
              <td>{batch.name}</td>
              <td>{batch.description}</td>
              <td>{batch.grade}</td>
              <td>
                <button
                  className={`timetable-button ${
                    batch.timetable === 'View Time Table' ? 'view' : 'upload'
                  }`}
                  onClick={batch.timetable === 'View Time Table' ? handleViewTimetable : handleUploadTimetable}
                >
                  {batch.timetable}
                </button>
              </td>
              <td>
                <button className="action-button" onClick={() => handleUpdate(batch)}>Update</button>
                <button className="action-button" onClick={() => handleDelete(batch.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBatch;
