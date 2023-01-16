import { configureStore } from '@reduxjs/toolkit';
import user from './features/user';
import applySlice from './features/apply';
import matchingSlice from './features/matching';

const createStore = () => {
  const store = configureStore({
    reducer: {
      user,
      apply: applySlice.reducer,
      matching: matchingSlice.reducer,
    },
  });
  return store;
};

export default createStore;
