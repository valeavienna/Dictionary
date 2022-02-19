import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

function Dictionary(props) {
  let [word, setWord] = useState(props.word);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  function search() {
    axios.get(apiURL).then(handleResponse);
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setWord(event.target.value);
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
      </div>
    );
  } else {
    search();
    return null;
  }
}

export default Dictionary;
