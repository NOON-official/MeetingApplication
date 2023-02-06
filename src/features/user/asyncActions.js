import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL } from '../../config/constants';

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
  const response = await axios.post(`${SERVER_URL}/user/logout`);

  return response.data;
});
