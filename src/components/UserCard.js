// src/components/UserCard.js
import React from 'react';
import '../styles/UserCard.css';

function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <img src="https://via.placeholder.com/80" alt={`${name}'s profile`} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;

