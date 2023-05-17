import React from "react";

const Digit = (props) => {
  return (
    <div className="digit">
      <h1>{props.count % 10}</h1>
    </div>
  );
};

export default Digit;
