import React, { Component } from "react";
import Axios from "axios";
import { Consumer } from "../../../Context";

export default class Search extends Component {
  state = {
    trackTitle: "",
  };
  findTrack = (e) => {
    e.preventDefault();
    Axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=d401b40d2200d7d835104896b5d895e3`
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music">Search for a song</i>
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.findTrack}>
                <div className="form-group">
                  <input
                    type="text"
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit"
                >
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
