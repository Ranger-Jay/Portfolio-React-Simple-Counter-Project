import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const SecondsCounter = ({ counterStr }) => {
  return (
    <div>
      <div className="container">
        <div className="number clock">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="number">
          <h1>{counterStr[0]}</h1>
        </div>
        <div className="number">
          <h1>{counterStr[1]}</h1>
        </div>
        <div className="number">
          <h1>{counterStr[2]}</h1>
        </div>
        <div className="number">
          <h1>{counterStr[3]}</h1>
        </div>
        <div className="number">
          <h1>{counterStr[4]}</h1>
        </div>
        <div className="number">
          <h1>{counterStr[5]}</h1>
        </div>
      </div>
    </div>
  );
};
