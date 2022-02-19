import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
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
