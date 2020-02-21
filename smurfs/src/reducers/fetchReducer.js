import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL
} from "../actions";

const initialState = {
  isFetching: false,
  smurfs: [],
  error: ""
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: "Failed to fetch smurf"
      };
    default:
      return state;
  }
};