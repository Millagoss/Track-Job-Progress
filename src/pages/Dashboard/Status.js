import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showStats } from '../../store/features/allJobs/allJobsSlice';

const Status = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);
  return <div>Status</div>;
};

export default Status;
