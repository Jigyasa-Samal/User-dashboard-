import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import EditUserPage from './pages/EditUserPage';

const App = () => {
  const [editedUsers, setEditedUsers] = useState([]);

  const handleUserUpdate = (updatedUser) => {
    setEditedUsers(prev => [...prev.filter(user => user.id !== updatedUser.id), updatedUser]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/edit/:id" element={<EditUserPage onSubmit={handleUserUpdate} editedUsers={editedUsers} />} />
      </Routes>
    </Router>
  );
};

export default App;
