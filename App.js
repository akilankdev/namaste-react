import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);

const jsxHeading = <h1 className="heading" tabIndex="1">Heading from JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
