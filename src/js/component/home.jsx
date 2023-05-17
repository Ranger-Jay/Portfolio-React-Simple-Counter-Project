import React from "react";
import Digit from "./Digit";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  let [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      setCounter(counter++);
    }, 1000);
  }, []);
  return (
    <div className="container d-flex">
      <Digit count={Math.floor(counter / 100000)} />
      <Digit count={Math.floor(counter / 10000)} />
      <Digit count={Math.floor(counter / 1000)} />
      <Digit count={Math.floor(counter / 100)} />
      <Digit count={Math.floor(counter / 10)} />
      <Digit count={Math.floor(counter / 1)} />
    </div>
  );
};

export default Home;
