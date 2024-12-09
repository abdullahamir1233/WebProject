import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  // State for username and password updates
  const [username, setUsername] = useState('CurrentUsername');
  const [password, setPassword] = useState('');

  const handleUsernameChange = () => {
    // Placeholder function to handle username update
    console.log(`New Username: ${username}`);
    alert('Username updated!');
  };

  const handlePasswordChange = () => {
    // Placeholder function to handle password update
    console.log(`New Password: ${password}`);
    alert('Password updated!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Profile Page</h1>

        {/* Username Section */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <button
            onClick={handleUsernameChange}
            className="w-full bg-blue-500 text-white py-2 mt-2 rounded-lg hover:bg-blue-600"
          >
            Change Username
          </button>
        </div>

        {/* Password Section */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <button
            onClick={handlePasswordChange}
            className="w-full bg-blue-500 text-white py-2 mt-2 rounded-lg hover:bg-blue-600"
          >
            Change Password
          </button>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
