import React from "react";
import "./Photos.css";
function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos box shadow">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-sm-6 col-md-4" key={index}>
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
