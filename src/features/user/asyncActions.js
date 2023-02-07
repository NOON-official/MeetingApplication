import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import backend from '../../util/backend';

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/login', data);
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
