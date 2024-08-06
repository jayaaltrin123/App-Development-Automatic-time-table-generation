import React, { useState } from 'react';
import './UpdateProfile.css';

const UpdateProfile = ({ student, onUpdate }) => {
    const [formData, setFormData] = useState(student);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <div className="update-profile">
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit} className="update-form">
                <div className="form-row">
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label>Contact:</label>
                    <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label>Batch:</label>
                    <input type="text" name="batch" value={formData.batch} onChange={handleChange} />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateProfile;
