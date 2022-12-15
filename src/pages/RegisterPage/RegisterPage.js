import React, { useState } from 'react';

import RegisterWrapper from './RegisterPage.style';
import { FormInput } from '../../components';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordCheck: '',
  isMember: true,
};

const RegisterPage = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const element = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [element]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { isMember, name, email, password, passwordCheck } = values;

    if (
      (!isMember && !name) ||
      !email ||
      !password ||
      (!isMember && !passwordCheck)
    ) {
      alert('please fill all boxes');
      return;
    } else if (!isMember && password !== passwordCheck) {
      alert('password does not match');
      return;
    }
    alert('success');
    setValues(initialState);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <RegisterWrapper className='full-page'>
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
            label='retype password'
          />
        )}

        <button type='submit' className='btn btn-block transition'>
          submit
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
