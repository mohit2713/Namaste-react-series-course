import { useEffect, useState } from "react";

const FunctionalComponent = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  const { name, location } = props;

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch("https://opentdb.com/api.php?amount=10");
  //   const json = await data.json();
  //   console.log(json);
  
  // };
  return (
    <div>
      <div className="functionalcom">
        <h1>Count:{count}</h1>
        <h1>Count:{count2}</h1>
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        <h3>Age:21</h3>
      </div>
    </div>
  );
};

export default FunctionalComponent;
