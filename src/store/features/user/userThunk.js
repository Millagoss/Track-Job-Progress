import { toast } from 'react-toastify';

import customFetch from '../../../utils/axios/axios';
import { clearAllJobsState, clearFilter } from '../allJobs/allJobsSlice';
import { logoutUser } from './userSlice';

export const registerUserThunk = async (path, userInfo, thunkApi) => {
  try {
    const resp = await customFetch.post(path, userInfo);
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
};

export const loginUserThunk = async (path, userInfo, thunkApi) => {
  try {
    const resp = await customFetch.post(path, userInfo);
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserInfoThunk = async (path, userInfo, thunkApi) => {
  try {
    const resp = await customFetch.patch('/auth/updateUser', userInfo, {
      headers: {
        authorization: `Bearer ${thunkApi.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error('UNauthorized request! Logging out...');
      thunkApi.dispatch(logoutUser());
      return;
    }
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};

export const clearStoreThunk = async (message, thunkApi) => {
  try {
    thunkApi.dispatch(logoutUser(message));
    thunkApi.dispatch(clearAllJobsState());
    thunkApi.dispatch(clearFilter());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
