import axios from "axios";


// For fetching data
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

// for posting data
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const fetchSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      // console.log("response", res.data);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log(err);
      dispatch({ type: FETCH_SMURF_FAIL, payload: err });
    });
};



export const postSmurf = data => dispatch => {
 dispatch({type: POST_SMURF_START});
 console.log("data", data)
 axios.post(`http://localhost:3333/smurfs`, {name: data.name, age: Number(data.age), height: data.height})
 .then(res => {
  // console.log("inside post", res.data)
  dispatch({type: POST_SMURF_SUCCESS, payload: res.data});
 })
 .catch(err => {
  dispatch({type: POST_SMURF_FAIL, payload: err})
 });
};
