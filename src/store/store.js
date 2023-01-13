import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';
import addJobSlice from './features/Job/addJobSlice';
import allJobsSlice from './features/allJobs/allJobsSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    addJob: addJobSlice,
    allJobs: allJobsSlice,
  },
});

export default store;
