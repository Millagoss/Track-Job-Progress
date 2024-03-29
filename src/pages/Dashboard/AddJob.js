import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { FormInput, FormSelectRow } from '../../components';
import { addJob, editJob } from '../../store/features/Job/addJobSlice';
import AddJobsWrapper from './styles/AddJob.style';

import { changeHandler, clearForm } from '../../store/features/Job/addJobSlice';

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
  } = useSelector((store) => store.addJob);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('please fill out all fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({ editJobId, position, company, jobLocation, status, jobType })
      );
      return;
    }
    dispatch(addJob({ position, company, jobLocation, status, jobType }));
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(changeHandler({ name, value }));
  };

  return (
    <AddJobsWrapper
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
        <h3>{isEditing ? 'edit job' : 'add Job'}</h3>
        <div className='form-center'>
          <div className='inputs-container'>
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
              value={status}
              statusOptions={statusOptions}
              labelText='status'
              name='status'
            />

            <FormSelectRow
              onChange={handleInput}
              value={jobType}
              statusOptions={jobTypeOptions}
              labelText='Job type'
              name='jobType'
            />
          </div>

          <div className='btn-container'>
            <button
              type='button'
              className='btn clear-btn'
              onClick={() => dispatch(clearForm())}
            >
              {isEditing ? 'cancel' : ' clear'}
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
    </AddJobsWrapper>
  );
};

export default AddJob;
