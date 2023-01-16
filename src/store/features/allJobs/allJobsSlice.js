import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import customFetch from '../../../utils/axios/axios';
import { fetchJobs } from './allJobsThunk';

const initialFilterState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOption: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFilterState,
};

export const fetchJobsAsyncThunk = createAsyncThunk(
  'Jobs/fetchJobs',
  async (_, thunkApi) => {
    let url = '/jobs';
    return fetchJobs(url, thunkApi);
  }
);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [fetchJobsAsyncThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchJobsAsyncThunk.fulfilled]: (state, { payload }) => {
      const { jobs, totalJobs, numOfPages } = payload;

      state.isLoading = false;
      state.jobs = jobs;
      state.numOfPages = numOfPages;
      state.totalJobs = totalJobs;
    },
    [fetchJobsAsyncThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload?.msg);
    },
  },
});

export default allJobsSlice.reducer;

export const { hideLoading, showLoading } = allJobsSlice.actions;
