import React, { Component } from "react";
import { Consumer } from "../../../Context";
import Spinner from "../Spinner";
export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return <h1>Tracks</h1>;
          }
        }}
      </Consumer>
    );
  }
}
