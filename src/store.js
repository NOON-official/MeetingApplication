import { configureStore } from '@reduxjs/toolkit';
import user from './features/user';
import apply from './features/apply';
import matching from './features/matching';
import { ticketApi } from './features/tickets/ticketApi';

const store = configureStore({
  reducer: {
    user,
    apply,
    matching,
    [ticketApi.reducerPath]: ticketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ticketApi.middleware),
});

export default store;
