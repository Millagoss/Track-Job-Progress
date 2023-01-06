import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';
import addCourseSlice from './features/course/add-CourseSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    addCourse: addCourseSlice,
  },
});

export default store;
