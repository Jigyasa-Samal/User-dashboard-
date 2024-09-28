import React, { useState } from 'react';
import UserList from '../components/UserList';

const UsersPage = () => {
  const [editedUsers, setEditedUsers] = useState([]);

  const handleUserUpdate = (updatedUser) => {
    setEditedUsers(prev => [...prev.filter(user => user.id !== updatedUser.id), updatedUser]);
  };

  return (
    <div>
      <h1>Users</h1>
      <UserList editedUsers={editedUsers} />
    </div>
  );
};

export default UsersPage;
