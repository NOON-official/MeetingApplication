import { combineReducers } from "redux";

import userSlice from "./user";
import applySlice from "./apply";
import matchingSlice from "./matching";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  apply: applySlice.reducer,
  matching: matchingSlice.reducer,
});
