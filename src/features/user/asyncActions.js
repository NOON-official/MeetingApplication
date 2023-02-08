import { createAsyncThunk } from '@reduxjs/toolkit';
import backend from '../../util/backend';

export const getMyInfo = createAsyncThunk(
  'user/getMyInfo',
  async (data, { rejectWithValue }) => {
    try {
      const response = await backend.get('/users/my-info', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const logout = createAsyncThunk('user/logout', async () => {
  const response = await backend.get(`/auth/signout`);

  return response.data;
});
