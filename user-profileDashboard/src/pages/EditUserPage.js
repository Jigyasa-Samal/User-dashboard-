import React from 'react';
import { useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';

const EditUserPage = ({ onSubmit, editedUsers }) => {
  const { id } = useParams();
  const userId = parseInt(id, 10);

  // Find user from editedUsers or initialize default values
  const user = editedUsers.find(user => user.id === userId) || {
    id: userId,
    name: '',
    email: '',
    address: '',
  };

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm user={user} onSubmit={onSubmit} />
    </div>
  );
};

export default EditUserPage;
