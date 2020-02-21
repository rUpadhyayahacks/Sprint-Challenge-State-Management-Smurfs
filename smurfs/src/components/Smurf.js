import React from "react";
import { connect } from "react-redux";
import { fetchSmurf, postSmurf } from "../actions";

// form imports from reactstrap

import { useForm } from "react-hook-form";

import { SmurfList } from './SmurfList'

const Smurf = props => {
  console.log("from display", props);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    // sends the data to the reducer
    props.postSmurf(data);
  };

  return (
    <div>
      <h1>Smurfville</h1>
      <h3>Create your smurf below!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" placeholder="Name" ref={register} required />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input name="age" placeholder="Age" ref={register} required />
        </div>

        <div>
          <label htmlFor="height">Height in cm:</label>
          <input name="height" placeholder="Height" ref={register} required />
        </div>
        <input type="submit" />
      </form>
      <div>
        <button onClick={props.fetchSmurf} color="success">
          See Smurfs
        </button>{" "}
      </div>

      {!props.state.fetchReducer.isFetching &&
        props.state.fetchReducer.smurfs.map(smurf => {
          console.log("from map", smurf);
          return <SmurfList smurf={smurf} />;
        })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { fetchSmurf, postSmurf })(
  Smurf
);