import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <div className="box">
          <h2>
            {props.result.word}{" "}
            <span className="phonetics">{props.result.phonetic}</span>
          </h2>
        </div>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
