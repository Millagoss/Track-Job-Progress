import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../../utils/axios/axios';
import { logoutUser } from '../user/userSlice';
import {
  showLoading,
  hideLoading,
  fetchJobsAsyncThunk,
} from '../allJobs/allJobsSlice';

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
  'Job/addJob',
  async (JobInfo, thunkApi) => {
    try {
      const resp = await customFetch.post('/jobs', JobInfo, {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      });
      thunkApi.dispatch(clearForm());
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkApi.dispatch(logoutUser('UNauthorized request!!'));
        return;
      }
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const deleteJob = createAsyncThunk(
  'Job/deleteJob',
  async (jobId, thunkApi) => {
    thunkApi.dispatch(showLoading());
    try {
      const resp = await customFetch.delete(`/jobs/${jobId}`, {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      });
      thunkApi.dispatch(fetchJobsAsyncThunk());
      return resp.data;
    } catch (error) {
      thunkApi.dispatch(hideLoading());
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const addJobSlice = createSlice({
  name: 'add-Job',
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
      toast.success('Job Created');
    },
    [addJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    //////////////////////// deleteJob
    [deleteJob.fulfilled]: (_, { payload }) => {
      toast.success(payload.msg);
    },
    [deleteJob.rejected]: (_, { payload }) => {
      toast.error(payload);
    },
  },
});

export default addJobSlice.reducer;
export const { changeHandler, clearForm } = addJobSlice.actions;
