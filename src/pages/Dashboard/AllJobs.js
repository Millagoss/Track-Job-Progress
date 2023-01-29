import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { JobsContainer, SearchContainer } from '../../components';
import { fetchJobsAsyncThunk } from '../../store/features/allJobs/allJobsSlice';

const AllJobs = () => {
  const dispatch = useDispatch();

  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
