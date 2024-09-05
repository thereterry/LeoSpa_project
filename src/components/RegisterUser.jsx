// src/components/RegisterUser.jsx
import React, { useState } from 'react';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      // Send POST request to the backend to create a new user
      const response = await fetch('http://localhost:5029/user/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          admin: isAdmin,
        }),
      });

      // Check if the response is successful
      if (response.ok) {
        setMessage('Account created successfully. Please check your email for further instructions.');
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
        setIsAdmin(false);
      } else {
        // Handle errors based on response status
        const errorData = await response.json();
        console.error('Error Response:', errorData); // Log the full error for debugging

        // Specific handling for "User already exists" error
        if (errorData.message.includes('User findes allerede')) {
          setMessage('The email address is already registered. Please try logging in or use a different email.');
        } else if (response.status === 401) {
          setMessage('There was an error creating your account. Please try again or contact support.');
        } else {
          setMessage('An unexpected error occurred. Please try again later.');
        }
      }
    } catch (error) {
      // Catch any other errors and log them
      setMessage('An unexpected error occurred. Please try again later.');
      console.error('Error during user creation:', error);
    }
  };

  return (
    <div>
      <h2>Create a New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Admin:</label>
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterUser;
