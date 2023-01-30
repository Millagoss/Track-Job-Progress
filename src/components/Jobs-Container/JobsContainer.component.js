import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import JobsContainerWrapper from './JobsContainer.style';
import Job from '../Job/Job.component';
import { Loading } from '../';
import PageBtnContainer from '../Page-btn-container/PageBtnContainer';
import { fetchJobsAsyncThunk } from '../../store/features/allJobs/allJobsSlice';

const JobsContainer = () => {
  const dispatch = useDispatch();
  const {
    jobs,
    numOfPages,
    totalJobs,
    search,
    searchStatus,
    searchType,
    page,
    sort,
  } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(fetchJobsAsyncThunk());
  }, [search, searchStatus, searchType, sort, page]);

  if (jobs.length < 1) {
    return (
      <JobsContainerWrapper>
        <h2>No Job to display...</h2>
      </JobsContainerWrapper>
    );
  }

  return (
    <JobsContainerWrapper>
      <h5>
        {totalJobs} Job{totalJobs > 1 && 's'} Found
      </h5>
      <motion.div layout className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </motion.div>
      {numOfPages > 1 && <PageBtnContainer />}
    </JobsContainerWrapper>
  );
};

export default JobsContainer;
