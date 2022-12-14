import React, { useState, useEffect } from 'react';

import RegisterWrapper from './RegisterPage.style';
import { FormInput } from '../../components';

const initialState = {
  name: '',
  email: '',
  password: '',
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
    console.log(e.target);
  };

  return (
    <RegisterWrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <span className='logo-container'>Learning Progress Tracker</span>
        <h3>Login</h3>
        <FormInput
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
          label='name'
        />
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
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </RegisterWrapper>
  );
};

export default RegisterPage;
