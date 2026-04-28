import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/* 
Header
-logo
-nav-items
Body
-search
-Restaurant container
-Restaurant card
Footer
-copyright
-contact us
-address
*/

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
