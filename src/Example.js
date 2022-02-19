import React from "react";

function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <p>
          <em>Example: {props.example}</em>
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default Example;
