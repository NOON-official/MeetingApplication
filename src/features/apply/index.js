import { createSlice } from '@reduxjs/toolkit';

export const APPLY_STORAGE_KEY = 'apply-data';

const initialState = {
  finishedStep: 0,
  gender: 1, // 1: 남자, 2: 여자
  memberCount: 3, // 2: 2대2, 3: 3대3
  universities: [],
  availableDates: [],
  areas: { city: 0, area: [] },
  city: 0,
  members: [],
  name: '',
  intro: '',
  drink: 3,
  moreMember: [],
  prefSameUniversity: true,
  prefAge: [20, 29],
  prefVibes: [],
};

const applySlice = createSlice({
  name: 'apply',
  initialState: {
    ...initialState,
    ...JSON.parse(localStorage.getItem(APPLY_STORAGE_KEY) || '{}'),
  },
  reducers: {
    submitStep1: (state, action) => {
      const { memberCount } = action.payload;

      state.finishedStep = 1;
      state.memberCount = memberCount;
      // state.universities = universities;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          ...JSON.parse(stored),
          ...action.payload,
          finishedStep: state.finishedStep,
        }),
      );
    },
    submitStep2: (state, action) => {
      const { availableDates, areas } = action.payload;

      state.finishedStep = 2;
      state.availableDates = availableDates;
      // state.areas = areas;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          ...JSON.parse(stored),
          ...action.payload,
          finishedStep: state.finishedStep,
        }),
      );
    },
    submitArea: (state, action) => {
      const { areas, city } = action.payload;

      state.finishedStep = 3;
      state.areas = areas;
      state.city = city;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          ...JSON.parse(stored),
          ...action.payload,
          finishedStep: state.finishedStep,
        }),
      );
    },
    submitStep3: (state, action) => {
      const { members } = action.payload;

      state.finishedStep = 4;
      state.members = members;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          ...JSON.parse(stored),
          ...action.payload,
          finishedStep: state.finishedStep,
        }),
      );
    },
    submitStep4: (state, action) => {
      const { intro, name } = action.payload;

      state.finishedStep = 5;
      state.intro = intro;
      state.name = name;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          ...JSON.parse(stored),
          ...action.payload,
          finishedStep: state.finishedStep,
        }),
      );
    },
    submitStep5: (state, action) => {
      const { drink, prefAge, prefSameUniversity, prefVibes } = action.payload;

      state.finishedStep = 5;
      // state.drink = drink;
      state.prefAge = prefAge;
      // state.prefSameUniversity = prefSameUniversity;
      state.prefVibes = prefVibes;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          ...JSON.parse(stored),
          ...action.payload,
          finishedStep: state.finishedStep,
        }),
      );
    },
    submitDrink: (state, action) => {
      const { drink, moreMember } = action.payload;

      state.finishedStep = 6;
      state.drink = drink;
      state.moreMember = moreMember;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          ...JSON.parse(stored),
          ...action.payload,
          finishedStep: state.finishedStep,
        }),
      );
    },
    submitId: (state, action) => {
      const { kakaoId } = action.payload;

      state.finishedStep = 7;
      state.kakaoId = kakaoId;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          ...JSON.parse(stored),
          ...action.payload,
          finishedStep: state.finishedStep,
        }),
      );
    },
    submitDate: (state, action) => {
      const { availableDates } = action.payload;

      state.finishedStep = 5; // 날짜만 재선택하는 경우이므로
      state.availableDates = availableDates;

      const stored = localStorage.getItem('apply-data');
      localStorage.setItem(
        APPLY_STORAGE_KEY,
        JSON.stringify({
          ...JSON.parse(stored),
          ...action.payload,
          finishedStep: state.finishedStep,
        }),
      );
    },
  },
});

export const {
  submitStep1,
  submitStep2,
  submitStep3,
  submitStep4,
  submitStep5,
  submitDate,
  submitArea,
  submitDrink,
  submitId,
} = applySlice.actions;

export default applySlice.reducer;
