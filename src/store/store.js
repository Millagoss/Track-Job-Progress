import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';
import addJobSlice from './features/Job/addJobSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    addJob: addJobSlice,
  },
});

export default store;
