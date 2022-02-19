import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  let [word, setWord] = useState(null);
  let [definition, setDefinition] = useState([{}]);
  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  function search(event) {
    event.preventDefault();
    axios.get(apiURL).then(response);
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  function response(response) {
    setDefinition(response.data[0]);
    console.log(definition);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleChange}></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}

export default Dictionary;
