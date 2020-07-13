import React, { Component } from "react";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: "abc" } },
      { track: { track_name: "123" } },
    ],
    heading: "top 10 tracks",
    API_KEY: "d401b40d2200d7d835104896b5d895e3",
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
