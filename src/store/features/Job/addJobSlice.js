import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addJobAsyncThunk,
  deleteJobAsyncThunk,
  editJobAsyncThunk,
} from './addJobThunk';

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
  async (JobInfo, thunkApi) => addJobAsyncThunk(JobInfo, thunkApi, clearForm)
);

export const deleteJob = createAsyncThunk(
  'Job/deleteJob',
  async (jobId, thunkApi) => deleteJobAsyncThunk(jobId, thunkApi)
);

export const editJob = createAsyncThunk('Job/editJob', async (info, thunkApi) =>
  editJobAsyncThunk(info, thunkApi)
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
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
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
    //////////////////////////////////////////////////// deleteJob
    [deleteJob.fulfilled]: (_, { payload }) => {
      toast.success(payload.msg);
    },
    [deleteJob.rejected]: (_, { payload }) => {
      toast.error(payload);
    },
    // editJob ///////////////////////////////////////////////////
    [editJob.pending]: (state) => {
      state.isLoading = true;
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Job Updated Successfully');
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default addJobSlice.reducer;
export const { changeHandler, clearForm, setEditJob } = addJobSlice.actions;
