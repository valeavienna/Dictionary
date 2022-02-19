import React from "react";

function Synonym(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonym">
        <p>
          <strong>Synonyms:</strong>
        </p>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonym;
