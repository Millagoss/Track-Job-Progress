import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../../utils/axios/axios';
import { logoutUser } from '../user/userSlice';

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

export const addJob = createAsyncThunk(
  'course/addCourse',
  async (courseInfo, thunkApi) => {
    try {
      const resp = await customFetch.post('/jobs', courseInfo, {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      });
      thunkApi.dispatch(clearForm());
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('ANauthorized request!! Logging out...');
        thunkApi.dispatch(logoutUser());
        return;
      }
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const addCourseSlice = createSlice({
  name: 'add-Course',
  initialState,
  reducers: {
    changeHandler: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    clearForm: () => {
      return { ...initialState };
    },
  },
  extraReducers: {
    [addJob.pending]: (state) => {
      state.isLoading = true;
    },
    [addJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Course Created');
    },
    [addJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default addCourseSlice.reducer;
export const { changeHandler, clearForm } = addCourseSlice.actions;
