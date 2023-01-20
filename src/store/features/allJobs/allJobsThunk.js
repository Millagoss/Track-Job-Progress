import customFetch from '../../../utils/axios/axios';

export const fetchJobs = async (_, thunkApi) => {
  let url = '/jobs';

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

export const getStatusAsyncThunk = async (_, thunkApi) => {
  try {
    const resp = await customFetch.get('/jobs/stats', {
      headers: {
        authorization: `Bearer ${thunkApi.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
};
