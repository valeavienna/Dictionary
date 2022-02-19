import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

function Dictionary() {
  let [word, setWord] = useState(null);
  let [result, setResult] = useState(null);
  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  function search(event) {
    event.preventDefault();
    axios.get(apiURL).then(handleResponse);
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleChange}></input>
        <input type="submit" value="Search"></input>
      </form>
      <Results result={result} />
    </div>
  );
}

export default Dictionary;
