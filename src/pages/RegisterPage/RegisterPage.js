import React, { useState, useEffect } from 'react';

import { Logo } from '../../components';
import RegisterWrapper from './RegisterPage.style';

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
    setValues({ ...value, [element]: value });
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
        <div className='form-row'>
          <div className='input-container'>
            <input
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              className='form-input'
            />
            <label
              htmlFor='name'
              className={`${
                values.name ? 'move-out' : 'move-in'
              } form-input-label`}
            >
              name
            </label>
          </div>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </RegisterWrapper>
  );
};

export default RegisterPage;
