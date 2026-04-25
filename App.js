import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="title">React Components</h1>;
const divElem = <div>Tomorrow is a holiday</div>;
const BodyComponent = () => (
  <div className="container">
    <Title />
    Component body
  </div>
);

const a = 33;
const b = 36;

const Span = function () {
  return (
    <span>
      {Title()}
      <Title />
      <Title></Title>
      Sum of a and b = {a + b}
      {console.log("hii bro")}
      {divElem}
    </span>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Span />);
