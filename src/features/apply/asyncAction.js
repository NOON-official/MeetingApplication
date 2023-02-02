import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createTeam = createAsyncThunk(
  'apply/createTeam',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/teams', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateTeam = createAsyncThunk('apply/updateTeam', async (data) => {
  const { id } = data;
  const response = await axios.post(`/teams/${id}`);
  return response.data;
});
