import React from 'react';

const UserInfoCard = ({ userData }) => {
  return (
    <div className="user-card " >
      <img src={userData.avatar_url} alt="User avatar" />
      <h2>{userData.name}</h2>
      <p>Username: {userData.login}</p>
      <p>Public Repos: {userData.public_repos}</p>
      <p>Public Gists: {userData.public_gists}</p>
      <p>Profile created at: {new Date(userData.created_at).toLocaleDateString()}</p>
    </div>
  );
};
export default UserInfoCard;