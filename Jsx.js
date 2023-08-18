import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>This is a jsx heading </h1>;
console.log(jsxHeading);
const jsxRen = ReactDOM.createRoot(document.getElementById("jsx"));

jsxRen.render(jsxHeading);
