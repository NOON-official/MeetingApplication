import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { STORAGE_KEY_ACCESS_TOKEN } from '../../config/constants';
import { logout, refreshJwtToken } from './asyncActions';

export const initialState = {
  accessToken: localStorage.getItem('accessToken'),
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;

      const payload = jwtDecode(action.payload);
      state.id = payload.sub;

      localStorage.setItem(STORAGE_KEY_ACCESS_TOKEN, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.accessToken = null;
      state.id = null;
      localStorage.removeItem(STORAGE_KEY_ACCESS_TOKEN);
    });
    builder.addCase(refreshJwtToken.fulfilled, (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;

      const payload = jwtDecode(accessToken);
      state.id = payload.sub;

      localStorage.setItem(STORAGE_KEY_ACCESS_TOKEN, accessToken);
    });
    builder.addCase(refreshJwtToken.rejected, (state) => {
      state.accessToken = null;
      state.id = null;
      localStorage.removeItem(STORAGE_KEY_ACCESS_TOKEN);
    });
  },
});

export const { setAccessToken } = userSlice.actions;

export default userSlice.reducer;
