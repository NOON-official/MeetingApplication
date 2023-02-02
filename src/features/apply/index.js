import { createSlice } from '@reduxjs/toolkit';

export const APPLY_STORAGE_KEY = 'apply-data';

const initialState = {
  finishedStep: 0,
  gender: 1, // 1: 남자, 2: 여자
  memberCount: 2, // 2: 2대2, 3: 3대3
  universities: [],
  availableDate: [],
  area: [],
  intro: '',
  members: [{}, {}, {}],
  drink: 3,
  prefSameUniversity: false,
  prefAge: [23, 25],
  prefVibe: [],
};

const applySlice = createSlice({
  name: 'apply',
  initialState: {
    ...initialState,
    ...JSON.parse(localStorage.getItem(APPLY_STORAGE_KEY) || '{}'),
  },
  reducers: {
    submitStep1: (state, action) => {
      const { gender, memberCount, universities } = action.payload;

      state.finishedStep = 1;
      state.gender = gender;
      state.memberCount = memberCount;
      state.universities = universities;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          finishedStep: state.finishedStep,
          ...JSON.parse(stored),
          ...action.payload,
        }),
      );
    },
    submitStep2: (state, action) => {
      const { availableDate, area } = action.payload;

      state.finishedStep = 2;
      state.availableDate = availableDate;
      state.area = area;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          finishedStep: state.finishedStep,
          ...JSON.parse(stored),
          ...action.payload,
        }),
      );
    },
    submitStep3: (state, action) => {
      const { members } = action.payload;

      state.finishedStep = 3;
      state.members = members;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          finishedStep: state.finishedStep,
          ...JSON.parse(stored),
          ...action.payload,
        }),
      );
    },
    submitStep4: (state, action) => {
      const { intro } = action.payload;

      state.finishedStep = 4;
      state.intro = intro;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          finishedStep: state.finishedStep,
          ...JSON.parse(stored),
          ...action.payload,
        }),
      );
    },
    submitStep5: (state, action) => {
      const { drink, prefAge, prefSameUniversity, prefVibe } = action.payload;

      state.finishedStep = 5;
      state.drink = drink;
      state.prefAge = prefAge;
      state.prefSameUniversity = prefSameUniversity;
      state.prefVibe = prefVibe;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          finishedStep: state.finishedStep,
          ...JSON.parse(stored),
          ...action.payload,
        }),
      );
    },
    submitStep6: (state) => {
      state.finishedStep = 6;
    },
  },
});

export const {
  submitStep1,
  submitStep2,
  submitStep3,
  submitStep4,
  submitStep5,
  submitStep6,
} = applySlice.actions;

export default applySlice.reducer;
