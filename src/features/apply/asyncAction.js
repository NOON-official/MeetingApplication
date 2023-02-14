import { createAsyncThunk } from '@reduxjs/toolkit';
import backend from '../../util/backend';

export const createTeam = createAsyncThunk(
  'apply/createTeam',
  async (data, { rejectWithValue }) => {
    try {
      const response = await backend.post('/teams', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateTeam = createAsyncThunk(
  'apply/updateTeam',
  async (userid, applydata, { rejectWithValue }) => {
    try {
      const response = await backend.patch(`/teams/${userid}`, applydata);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
