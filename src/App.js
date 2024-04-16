
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import UserInfoCard from './component/UserInfoCard';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError('');
    } catch (error) {
      setError('User not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <div className="App" >
        <h1 style={{marginTop:'50px'}}>GitHub User Info</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit" className='btn-primary:hover' disabled={loading}>
            {loading ? 'Loading...' : 'Search'}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        {userData && <UserInfoCard userData={userData} />}
      </div>
    </div>

  );
}

export default App;
