import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import { FormInput, FormSelectRow } from '../../components';

import DashboardFormWrapper from './styles/DashboardFormPage.style';

const AddJob = () => {
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
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
  };

  const AddCoursePageMotionWrapper = motion(DashboardFormWrapper);

  return (
    <AddCoursePageMotionWrapper
      initial={{
        opacity: 0,
        marginLeft: '1.5rem',
      }}
      animate={{
        opacity: 1,
        marginLeft: 0,
      }}
      transition={{
        delay: 0.2,
        default: {
          duration: 0.5,
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
            onChange={handleJobInput}
            label='position'
          />
          <FormInput
            type='text'
            name='company'
            value={position}
            onChange={handleJobInput}
            label='company'
          />
          <FormInput
            type='text'
            name='jobLocation'
            value={position}
            onChange={handleJobInput}
            label='job-location'
          />

          <FormSelectRow
            onChange={handleJobInput}
            status={status}
            statusOptions={statusOptions}
            labelText='status'
            name='status'
          />

          <FormSelectRow
            onChange={handleJobInput}
            status={jobType}
            statusOptions={jobTypeOptions}
            labelText='Job type'
            name='jobType'
          />

          <div className='btn-container'>
            <button
              type='button'
              className='btn clear-btn'
              onClick={() => console.log('ola')}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-submit'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'loading' : 'submit'}
            </button>
          </div>
        </div>
      </form>
    </AddCoursePageMotionWrapper>
  );
};

export default AddJob;
