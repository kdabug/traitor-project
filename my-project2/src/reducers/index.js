// example reducer
//takes two arguments (state and payload)
//src/js/reducers/index.js
import { combineReducers } from "redux";

// This is where you keep import all reducers
import appReducer from "./appReducer";

const allReducers = {
  appReducer
};

export const combinedReducers = combineReducers(allReducers);
