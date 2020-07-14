import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { Context } from "../../../Context";

export default function Search() {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");
  useEffect(() => {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=d401b40d2200d7d835104896b5d895e3`
    )
      .then((res) => {
        // console.log(res.data);

        let track_list = res.data.message.body.track_list;
        setState({ track_list, heading: "Search Results" });
      })
      .catch((err) => console.log(err));
  }, [trackTitle]);

  const findTrack = (e) => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music" />
        Search for a song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            name="trackTitle"
            value={userInput}
            onChange={onChange}
            className="form-control form-control-lg"
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          Get Track Lyrics
        </button>
      </form>
    </div>
  );
}
