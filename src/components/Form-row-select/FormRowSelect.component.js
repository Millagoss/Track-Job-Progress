import React from 'react';

const FormSelectRow = ({
  labelText,
  onChange,
  name,
  status,
  statusOptions,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText}
      </label>
      <select
        name={name}
        id={name}
        value={status}
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
