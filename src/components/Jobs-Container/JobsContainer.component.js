import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import JobsContainerWrapper from './JobsContainer.style';
import Job from '../Job/Job.component';
import { Loading } from '../';

const JobsContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, jobs } = useSelector((store) => store.allJobs);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length < 1) {
    return (
      <JobsContainerWrapper>
        <h2>No Job to display...</h2>
      </JobsContainerWrapper>
    );
  }

  return (
    <JobsContainerWrapper>
      <h5>Jobs info</h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </JobsContainerWrapper>
  );
};

export default JobsContainer;
