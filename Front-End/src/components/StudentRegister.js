import React, { useState } from 'react';
import './StudentRegister.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentRegister() {
  const navigate = useNavigate(); 
  const [role] = useState('student'); // Role is fixed as student
  const [username, setUsername] = useState(''); // Add username state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/users/register', {
        role,
        username, // Include username in the request
        email,
        password
      });
  
      if (response.status === 200) {
        setSuccess('Registration successful!');
        navigate('/login'); // Navigate to login page after successful registration
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };
  

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Student Registration</h2>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegister;
