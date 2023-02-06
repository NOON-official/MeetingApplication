import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { STORAGE_KEY_ACCESS_TOKEN } from '../../config/constants';
import { logout } from './asyncActions';

export const initialState = {
  accessToken: localStorage.getItem('accessToken'),
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;

      const payload = jwtDecode(action.payload);
      state.name = payload.name;

      localStorage.setItem(STORAGE_KEY_ACCESS_TOKEN, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.accessToken = null;
      state.name = null;
      localStorage.removeItem(STORAGE_KEY_ACCESS_TOKEN);
    });
  },
});

export const { setAccessToken } = userSlice.actions;

export default userSlice.reducer;
