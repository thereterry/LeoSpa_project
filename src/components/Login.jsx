import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState(null); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await fetch('http://localhost:5029/login/login', {
                method: 'POST',
                body:formData,
                credentials: 'include', 
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Login successful!');
                setUserData(data.user);
            
            } else {
                setMessage(`Error: ${data.message || 'Unauthorized'}`);
            
            }

        
       
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
            {userData && (
            <div>
            <h3>Welcome, {userData.name}!</h3>
            <p>User ID: {userData.users_id}</p>
            <p>Admin: {userData.admin ? 'Yes' : 'No'}</p>
            </div>
      )}
        </div>
    );
};

export default Login;
