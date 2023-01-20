import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showStats } from '../../store/features/allJobs/allJobsSlice';
import { StatsContainer, ChartContainer, Loading } from '../../components';

const Status = () => {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  useEffect(() => {
    dispatch(showStats());
  }, []);

  return (
    <>
      <StatsContainer />
      {monthlyApplications?.length > 0 && <ChartContainer />}
    </>
  );
};

export default Status;
