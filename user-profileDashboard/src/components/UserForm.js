import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
});

const UserForm = ({ user, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: user,
    resolver: yupResolver(schema),
  });

  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleFormSubmit = (data) => {
    onSubmit({ ...data, id: user.id, profileImage });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Address</label>
        <input {...register('address')} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div>
        <label>Profile Picture</label>
        <input type="file" onChange={handleImageChange} />
        {profileImage && <img src={profileImage} alt="Profile" width="100" />}
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
