import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import logger from 'redux-logger';
const persistConfig = {
    key: 'root',
    storage,
};
const reducers = combineReducers({ persistConfig: rootReducer });
const persistedReducer = persistReducer(persistConfig, reducers);
const store= configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
  //미들웨어 작성시 에러 주의
        getDefaultMiddleware(
            {
                serializableCheck: {
                    ignoredActions: [PERSIST, PURGE],
                },
            }
        ).concat(logger)
});

export default store;