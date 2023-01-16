import { useSelector } from 'react-redux';

import customFetch from '../../../utils/axios/axios';

export const fetchJobs = async (url, thunkApi) => {
  try {
    const resp = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkApi.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
};
