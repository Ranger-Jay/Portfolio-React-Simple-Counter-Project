import React from "react";
import PropTypes from "prop-types";
import Clock from "./Clock.jsx";

//include images into your bundle

//create your first component
const SecondsCounter = (props) => {
  return (
    <div className="container">
      <div className="far fa-clock" />
      <div className="counter">
        <p>{props.numSix}</p>
        <p>{props.numFiv}</p>
        <p>{props.numFou}</p>
        <p>{props.numThr}</p>
        <p>{props.numTwo}</p>
        <p>{props.numOne}</p>
      </div>
    </div>
  );
};

SecondsCounter.propTypes = {
  numOne: PropTypes.number,
  numTwo: PropTypes.number,
  numThr: PropTypes.number,
  numFou: PropTypes.number,
  numFiv: PropTypes.number,
  numSix: PropTypes.number,
};

export default SecondsCounter;
