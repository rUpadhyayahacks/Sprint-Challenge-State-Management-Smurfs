import {
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL
  } from "../actions";
  
  const initialState = {
    isPosting: false,
    smurfs: [
      {
        name: "",
        age: "",
        height: "",
        id: Date.now()
      }
    ],
    error: ""
  };
  
  export const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_SMURF_START:
        console.log("hello", action.payload);
        return {
          ...state,
          isPosting: true,
          smurfs: [...state.smurfs, action.payload]
        };
      case POST_SMURF_SUCCESS:
        return {
          ...state,
          isPosting: false,
          smurfs: action.payload
        };
      case POST_SMURF_FAIL:
        return {
          ...state,
          isPosting: false,
          error: "Failed to post new smurf"
        };
      default:
        return state;
    }
  };