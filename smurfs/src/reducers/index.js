import { combineReducers } from "redux";
// Import all reducer files here
import { fetchReducer } from "./fetchReducer";
import { postReducer } from "./postReducer";

const allReducers = combineReducers({
  //key: value pairs here
  fetchReducer: fetchReducer,
  postReducer: postReducer
});

export default allReducers;