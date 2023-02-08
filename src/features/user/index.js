import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { STORAGE_KEY_ACCESS_TOKEN } from '../../config/constants';
import { getMyInfo, logout } from './asyncActions';

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
    builder.addCase(getMyInfo.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.accessToken = null;
      state.id = null;
      localStorage.removeItem(STORAGE_KEY_ACCESS_TOKEN);
    });
  },
});

export const { setAccessToken } = userSlice.actions;

export default userSlice.reducer;
