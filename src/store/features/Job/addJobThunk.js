import customFetch from '../../../utils/axios/axios';
import {
  showLoading,
  hideLoading,
  fetchJobsAsyncThunk,
} from '../allJobs/allJobsSlice';
import { logoutUser } from '../user/userSlice';
import { clearForm } from './addJobSlice';

export const addJobAsyncThunk = async (JobInfo, thunkApi) => {
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
};

export const deleteJobAsyncThunk = async (jobId, thunkApi) => {
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
};

export const editJobAsyncThunk = async (info, thunkApi) => {
  const { editJobId, position, company, jobLocation, status, jobType } = info;
  const newJob = { position, company, jobLocation, status, jobType };
  try {
    const resp = await customFetch.patch(`/jobs/${editJobId}`, newJob, {
      headers: {
        authorization: `Bearer ${thunkApi.getState().user.user.token}`,
      },
    });
    thunkApi.dispatch(clearForm());
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};
