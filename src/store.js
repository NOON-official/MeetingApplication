import { configureStore } from '@reduxjs/toolkit';
import user from './features/user';
import apply from './features/apply';
import matching from './features/matching';

const store = configureStore({
  reducer: {
    user,
    apply,
    matching,
  },
});

export default store;
