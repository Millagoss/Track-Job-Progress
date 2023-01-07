import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import {
  getUserFromLocalStorage,
  setUserToLocalStorage,
  removeUserFromLocalStorage,
} from '../../../utils/localStorage/localStorage';

import {
  loginUserThunk,
  registerUserThunk,
  updateUserInfoThunk,
} from './userThunk';

const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  isSidebarOpen: true,
};

export const registerUser = createAsyncThunk(
  'user/register-user',
  async (userInfo, thunkApi) => {
    return registerUserThunk('/auth/register', userInfo, thunkApi);
  }
);
export const loginUser = createAsyncThunk(
  'user/login-user',
  async (userInfo, thunkApi) => {
    return loginUserThunk('/auth/login', userInfo, thunkApi);
  }
);

export const updateUser = createAsyncThunk(
  'user/update-user',
  async (userInfo, thunkApi) => {
    return updateUserInfoThunk('/auth/updateUser', userInfo, thunkApi);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      // state.user = user;
      toast.success(`Hello ${user.name}, please login with your account`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.msg);
    },
    // LoginUserExReducer ///////////////////////////////////////
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      toast.success(`welcome back ${user.name}`);
      setUserToLocalStorage(user);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    // UpdateUserExReducer ///////////////////////////////////////
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload: { user } }) => {
      state.user = user;
      state.isLoading = false;
      setUserToLocalStorage(user);
      toast.success('user profile updated successfully');
    },
    [updateUser.rejected]: (state, payload) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
