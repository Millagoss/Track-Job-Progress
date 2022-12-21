import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import customFetch from '../../../utils/axios/axios';

const initialState = {
  user: null,
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  'user/register-user',
  async (userInfo, thunkApi) => {
    try {
      const resp = await customFetch.post('/auth/register', userInfo);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  'user/login-user',
  async (userInfo, thunkApi) => {
    try {
      const resp = await customFetch.post('/auth/login', userInfo);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      toast.success(`Hello ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.msg);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      toast.success(`welcome back ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;
