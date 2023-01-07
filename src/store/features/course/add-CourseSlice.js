import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

const addCourseSlice = createSlice({
  name: 'add-Course',
  initialState,
  reducers: {
    changeHandler: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
  },
});

export default addCourseSlice.reducer;
export const { changeHandler } = addCourseSlice.actions;
