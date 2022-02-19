import React from "react";
import "./Photos.css";
function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos box">
        <div ClassName="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={""}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Photos;
