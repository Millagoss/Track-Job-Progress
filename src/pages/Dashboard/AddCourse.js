import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { FormInput, FormSelectRow } from '../../components';
import { addJob } from '../../store/features/course/add-CourseSlice';
import DashboardFormWrapper from './styles/DashboardFormPage.style';

import {
  changeHandler,
  clearForm,
} from '../../store/features/course/add-CourseSlice';

const AddJob = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.addCourse);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error('please fill out all fields');
      return;
    }
    console.log('my name');
    dispatch(addJob({ position, company, jobLocation, status, jobType }));
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(changeHandler({ name, value }));
  };

  return (
    <DashboardFormWrapper
      initial={{
        opacity: 0,
        marginLeft: '2rem',
      }}
      animate={{
        opacity: 1,
        marginLeft: 0,
      }}
      transition={{
        delay: 0.1,
        default: {
          duration: 0.2,
        },
      }}
    >
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add Course'}</h3>
        <div className='form-center'>
          <FormInput
            type='text'
            name='position'
            value={position}
            onChange={handleInput}
            label='position'
            addClass='move'
          />
          <FormInput
            type='text'
            name='company'
            value={company}
            onChange={handleInput}
            label='company'
            addClass='move'
          />
          <FormInput
            type='text'
            name='jobLocation'
            value={jobLocation}
            onChange={handleInput}
            label='job-location'
            addClass='move'
          />

          <FormSelectRow
            onChange={handleInput}
            status={status}
            statusOptions={statusOptions}
            labelText='status'
            name='status'
          />

          <FormSelectRow
            onChange={handleInput}
            status={jobType}
            statusOptions={jobTypeOptions}
            labelText='Job type'
            name='jobType'
          />

          <div className='btn-container'>
            <button
              type='button'
              className='btn clear-btn'
              onClick={() => dispatch(clearForm())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-submit'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'loading...' : 'submit'}
            </button>
          </div>
        </div>
      </form>
    </DashboardFormWrapper>
  );
};

export default AddJob;
