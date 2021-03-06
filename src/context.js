import React, { Component } from "react";
import Axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
    API_KEY: "d401b40d2200d7d835104896b5d895e3"
  };
  componentDidMount() {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${this.state.API_KEY}`
    ).then(res => {
      this.setState({ track_list: res.data.message.body.track_list });
    }).catch(err=> console.log(err));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
