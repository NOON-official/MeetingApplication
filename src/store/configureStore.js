import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const createStore = () => {
  const middleware = getDefaultMiddleware;
  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });
  return store;
};
export default createStore;
