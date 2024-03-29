import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { fetchJobs, getStatusAsyncThunk } from './allJobsThunk';

const initialFilterState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

export const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  isFilter: true,
  ...initialFilterState,
};

export const fetchJobsAsyncThunk = createAsyncThunk(
  'Jobs/fetchJobs',
  fetchJobs
);

export const showStats = createAsyncThunk(
  'Jobs/showStatus',
  getStatusAsyncThunk
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
    handleSearchFormInput: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
      state.page = 1;
    },
    clearFilter: (state) => {
      return { ...state, ...initialFilterState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    toggleFilter: (state, { payload }) => {
      state.isFilter = payload ? true : !state.isFilter;
    },
    clearAllJobsState: (state) => initialState,
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
    // ////////////////////////////////// showStatus
    [showStats.pending]: (state) => {
      state.isLoading = true;
    },
    [showStats.fulfilled]: (state, { payload }) => {
      const { defaultStats, monthlyApplications } = payload;
      state.isLoading = false;
      state.stats = defaultStats;
      state.monthlyApplications = monthlyApplications;
    },
    [showStats.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload?.msg);
    },
  },
});
export default allJobsSlice.reducer;

export const {
  hideLoading,
  showLoading,
  handleSearchFormInput,
  clearFilter,
  changePage,
  toggleFilter,
  clearAllJobsState,
} = allJobsSlice.actions;
