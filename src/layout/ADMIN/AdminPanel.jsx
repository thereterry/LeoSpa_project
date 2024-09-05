// src/components/AdminPanel.jsx
import React, { useState } from 'react';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    // Function to fetch admin data (users)
    const fetchAdminData = async () => {
        try {
            const response = await fetch('http://localhost:5029/login/admin', {
                method: 'GET',
                credentials: 'include', // Include credentials to maintain session data
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error:', errorData.message);
                setMessage(`Error: ${errorData.message}`);
                return;
            }

            const data = await response.json();
            setUsers(data); // Save fetched users in state
            setMessage('Fetched admin data successfully!');
        } catch (error) {
            console.error('Error fetching admin data:', error);
            setMessage('Failed to fetch admin data.');
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <button onClick={fetchAdminData}>Fetch Users</button>
            <p>{message}</p>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
