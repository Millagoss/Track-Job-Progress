import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import JobWrapper from './Job.style';

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();

  return (
    <JobWrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <h4>more content</h4>
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-job'
              className='btn btn-edit'
              onClick={() => console.log('edit')}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => console.log('delete')}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </JobWrapper>
  );
};

export default Job;
