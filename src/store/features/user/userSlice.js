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
      const resp = await customFetch.post('/auth/testingRegister', userInfo);
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  'user/login-user',
  async (userInfo, thunkApi) => {
    console.log(userInfo);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
