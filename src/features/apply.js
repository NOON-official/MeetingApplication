import { createSlice } from '@reduxjs/toolkit';

export const APPLY_STORAGE_KEY = 'apply-data';

const initialState = {
  finishedStep: 0,
  gender: 0, // 1: 남자, 2: 여자
  memberCount: 0, // 2: 2대2, 3: 3대3
  universities: [],
  ...localStorage.getItem(APPLY_STORAGE_KEY),
};

const applySlice = createSlice({
  name: 'apply',
  initialState,
  reducers: {
    submitStep1: (state, action) => {
      const { gender, memberCount, universities } = action.payload;

      state.finishedStep = 1;
      state.gender = gender;
      state.memberCount = memberCount;
      state.universities = universities;

      localStorage.setItem(APPLY_STORAGE_KEY, JSON.stringify(state));
    },
  },
});

export const { submitStep1 } = applySlice.actions;

export default applySlice.reducer;
