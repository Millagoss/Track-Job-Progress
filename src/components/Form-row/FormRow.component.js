import React from 'react';

const FormInput = ({ type, name, value, onChange, label, addClass = '' }) => {
  return (
    <div className='input-container'>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`${!value && 'red-border'} form-input`}
      />
      <label
        htmlFor={name}
        className={`${value ? 'move-out' : 'move-in'} form-input-label `}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
