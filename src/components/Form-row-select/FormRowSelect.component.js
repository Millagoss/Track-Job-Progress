import React from 'react';

const FormSelectRow = ({ labelText, onChange, name, value, statusOptions }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className='form-select'
      >
        {statusOptions.map((status, index) => {
          return (
            <option value={status} key={index}>
              {status}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelectRow;
