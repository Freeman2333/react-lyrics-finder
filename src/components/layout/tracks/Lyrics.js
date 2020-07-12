import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";
export default class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };
  componentDidMount() {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=d401b40d2200d7d835104896b5d895e`
    ).then(res => {
      this.setState({
        lyrics: res.data.message.body.lyrics
      });
    });
  }
  render() {
    return <div></div>;
  }
}
