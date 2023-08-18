import React from "react";
import ReactDOM from "react-dom/client";

{
  /* <div id="parent">
  <div id="child">
    <h1>i am a h1 tag</h1>
    <h2>i am a h2 tag</h2>
  </div>
  <div id="child2">
    <h1>i am a h1 tag</h1>
    <h2>i am a h2 tag</h2>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am a h1 tag"), // if you want to pass two elements as simblings you need to pass in array //
    React.createElement("h2", {}, "i am a h2 tag"),
  ]),
  ,
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am a h1 tag"), // if you want to pass two elements as simblings you need to pass in array //
    React.createElement("h2", {}, "i am a h2 tag"),
  ]),
]);

const parcel = ReactDOM.createRoot(document.getElementById("nested-div"));
parcel.render(parent);
// console.log(parent);

// React is not only written in JXS , This above is CORE of react. //


