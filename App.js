import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",{id:"parent"},[
  React.createElement("div",{className:"child1"},[
    React.createElement("h1",{},"Akilan here"),
    React.createElement("h1",{},"This is a H1 tag")]
    ),
  React.createElement("div",{className:"child2"},[
    React.createElement("h1",{},"H1 tag"),
    React.createElement("h1",{},"H2 tag")]
    )
  ]);

root.render(parent);
