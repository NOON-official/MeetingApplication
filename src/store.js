import { configureStore } from '@reduxjs/toolkit';
import user from './features/user';
import apply from './features/apply';
import matching from './features/matching';
import { backendApi } from './features/backendApi';
import { userApi } from './features/api/userApi';

const store = configureStore({
  reducer: {
    user,
    apply,
    matching,
    [backendApi.reducerPath]: backendApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(backendApi.middleware)
      .concat(userApi.middleware),
});

export default store;
