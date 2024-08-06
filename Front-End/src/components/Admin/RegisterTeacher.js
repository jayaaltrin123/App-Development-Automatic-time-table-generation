import React, { useState } from 'react';
import './RegisterTeacher.css';

const RegisterTeacher = ({ onRegisterTeacher }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNo: '',
    street: '',
    city: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a teacher object
    const newTeacher = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.contactNo,
      address: `${formData.street}, ${formData.city}, ${formData.pincode}`
    };
    onRegisterTeacher(newTeacher); // Pass the new teacher to the parent component
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      contactNo: '',
      street: '',
      city: '',
      pincode: ''
    }); // Clear the form after submission
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register Here!!!</h2>
        <div className="register-form-group">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="register-form-group">
          <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="register-form-group">
          <input type="text" name="contactNo" placeholder="Contact No" value={formData.contactNo} onChange={handleChange} />
          <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} />
        </div>
        <div className="register-form-group">
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
        </div>
        <button type="submit" className="register-button">Register User</button>
      </form>
    </div>
  );
};

export default RegisterTeacher;
