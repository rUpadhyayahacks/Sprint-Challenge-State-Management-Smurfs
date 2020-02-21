import React from "react";
import { Card, CardTitle } from "reactstrap";

export const SmurfList = props => {
  console.log("from villagers", props);

  return (
    <div className="villagers-list">
      <Card body inverse color="primary">
        <CardTitle>Name: {props.smurf.name}</CardTitle>
        <CardTitle>Age: {props.smurf.age} years old</CardTitle>
        <CardTitle>Height: {props.smurf.height}</CardTitle>
        <CardTitle>ID: {props.smurf.id}</CardTitle>
      </Card>
    </div>
  );
};