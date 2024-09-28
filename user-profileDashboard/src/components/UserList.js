import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = ({ editedUsers }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Combine original users and edited users, giving preference to edited users
  const allUsers = [...editedUsers, ...users.filter(user => !editedUsers.some(eu => eu.id === user.id))];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {allUsers.map(user => (
          <li key={user.id}>
            <Link to={`/edit/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
