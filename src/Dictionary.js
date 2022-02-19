import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

function Dictionary(props) {
  let [word, setWord] = useState(props.word);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  let pexelsApiKey = "563492ad6f9170000100000108398744febb44bf92dc0103c1269baa";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;

  function search() {
    axios.get(apiURL).then(handleResponse);
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    console.log(photos);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleChange}
            className="shadow"
            defaultValue={props.word}
          ></input>
          <input type="submit" value="Search" className="shadow"></input>
        </form>
        <Results result={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();
    return null;
  }
}

export default Dictionary;
