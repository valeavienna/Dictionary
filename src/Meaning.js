import React from "react";
import "./Meaning.css";
import Example from "./Example";
import Synonym from "./Synonym";

function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="box shadow">
        <h3 className="text-uppercase">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition}
              </p>
              <Example example={definition.example} />
              <Synonym synonyms={definition.synonyms} />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Meaning;
