//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
<script
  src="https://kit.fontawesome.com/7fe33c6696.js"
  crossorigin="anonymous"
></script>;

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let count = 0;

setInterval(() => {
  const numberOne = Math.floor(count / 1) % 10;
  const numberTwo = Math.floor(count / 10) % 10;
  const numberThree = Math.floor(count / 100) % 10;
  const numberFour = Math.floor(count / 1000) % 10;
  const numberFive = Math.floor(count / 10000) % 10;
  const numberSix = Math.floor(count / 100000) % 10;

  count++;

  //render your react application
  ReactDOM.render(
    <SecondsCounter
      numOne={numberOne}
      numTwo={numberTwo}
      numThr={numberThree}
      numFou={numberFour}
      numFiv={numberFive}
      numSix={numberSix}
    />,
    document.querySelector("#app")
  );
}, 1000);
