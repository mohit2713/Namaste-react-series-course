import React from "react";
import ReactDOM from "react-dom/client";

const Composcom = function () {
  return <h1> this is a Composing component </h1>;
};
// we can also write functional components like above, not only in fat arrow function //
const jsinjsx = <h1> this is js in jsx</h1>;
// WE can write reactelement or javascript in functional component//
const Heading = () => (
  <div>
    <h1> Namaste React Functional components</h1>
    <Composcom />
    <Composcom></Composcom>
    {Composcom()}
    {jsinjsx}
  </div>
);
// Composcom is a composing components //
// at the end of day its an composcom() is function //
const funco = ReactDOM.createRoot(document.getElementById("Funtionalcom"));

funco.render(<Heading />); // important to render component in < /> //
console.log(funco);
