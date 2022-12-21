import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import RegisterWrapper from './RegisterPage.style';
import { FormInput } from '../../components';

import { toast } from 'react-toastify';

import { registerUser, loginUser } from '../../store/features/user/userSlice';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  passwordCheck: '',
  isMember: true,
};

const RegisterPage = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const element = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [element]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { isMember, name, lastName, email, password, passwordCheck } = values;

    if (
      (!isMember && !name) ||
      !email ||
      !password ||
      (!isMember && !passwordCheck)
    ) {
      toast.error('please fill out all fields');
      return;
    } else if (!isMember && password !== passwordCheck) {
      toast.error('password does not match');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, lastName, email, password }));
    setValues(initialState);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    setTimeout(() => {
      user && navigate('/');
    }, 3000);
  }, [user]);

  return (
    <RegisterWrapper className='full-page shapedividers_com-3444'>
      <form className='form' onSubmit={handleSubmit}>
        <span className='logo-container'>Learning Progress Tracker</span>
        <h3>{values.isMember ? 'Login' : 'Register'} </h3>
        {!values.isMember && (
          <FormInput
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
            label='name'
          />
        )}
        {!values.isMember && (
          <FormInput
            type='text'
            name='lastName'
            value={values.lastName}
            onChange={handleChange}
            label='last name'
          />
        )}

        <FormInput
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          label='email'
        />
        <FormInput
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
          label='password'
        />
        {!values.isMember && (
          <FormInput
            type='password'
            name='passwordCheck'
            value={values.passwordCheck}
            onChange={handleChange}
            label='confirm password'
          />
        )}

        <button
          type='submit'
          disabled={isLoading}
          className='btn btn-block transition'
        >
          {isLoading ? 'submitting...' : 'submit'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member'}

          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </RegisterWrapper>
  );
};

export default RegisterPage;
