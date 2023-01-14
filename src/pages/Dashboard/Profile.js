import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { FormInput } from '../../components';
import ProfileWrapper from './styles/Profile.style';

import { updateUser } from '../../store/features/user/userSlice';
const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, lastName, email, location } = userData;

    if (!name || !lastName || !email || !location) {
      toast.error('please fill out all fields');
      return;
    }

    dispatch(updateUser({ name, lastName, email, location }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <ProfileWrapper
      key='modal'
      animate={{
        opacity: 1,
        marginLeft: 0,
      }}
      initial={{
        opacity: 0,
        marginLeft: '2rem',
      }}
      transition={{
        delay: 0.1,
        default: {
          duration: 0.2,
        },
      }}
    >
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className='form-center'>
          <FormInput
            type='text'
            name='name'
            label='name'
            addClass='move-in'
            value={userData.name}
            onChange={handleChange}
          />
          <FormInput
            type='text'
            name='lastName'
            label='last name'
            addClass='move-in'
            value={userData.lastName}
            onChange={handleChange}
          />
          <FormInput
            type='email'
            name='email'
            label='email'
            addClass='move-in'
            value={userData.email}
            onChange={handleChange}
          />
          <FormInput
            type='text'
            name='location'
            label='location'
            addClass='move-in'
            value={userData.location}
            onChange={handleChange}
          />
          <button
            className='btn btn-submit profile-page-btn'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'please wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </ProfileWrapper>
  );
};

export default Profile;
