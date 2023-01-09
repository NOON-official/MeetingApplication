import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,
  logoutLoading: false, // 로그아웃 시도중
  logoutDone: false,
  logoutError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    loginLoading: (state) => {
      state.loginLoading = true;
      state.loginDone = false;
      state.loginError = null;
    },
    loginDone: (state, action) => {
      state.loginLoading = false;
      state.me = action.payload;
      state.loginDone = true;
    },
    loginError: (state, action) => {
      state.loginLoading = false;
      state.loginError = action.payload;
    },
  },
  extraReducers: (builder) => builder,
});

export default userSlice;
