import React from "react";
import "./Synonyms.css";

function Synonym(props) {
  if (props.synonyms) {
    return (
      <div className="Synonym">
        <p>
          <em>Synonyms: </em>
          {props.synonyms.map(function (synonym, index) {
            return (
              <span className="font-weight-light" key={index}>
                {" "}
                {synonym}{" "}
              </span>
            );
          })}{" "}
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonym;
