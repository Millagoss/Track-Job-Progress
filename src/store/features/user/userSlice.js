import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

const initialState = {
  user: null,
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  'user/register-user',
  async (userInfo, thunkApi) => {
    console.log(userInfo);
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
