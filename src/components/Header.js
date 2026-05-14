import { useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");


  //1-useEffect with no dependency array will be called on every render.
  //2-useEffect with empty dependency array [] will be called only in initial render.
  //3-useEffect with a variable inside the dependency array will be called whenever the variable updates.
  
  useEffect(() => {
    console.log("useeffect called");
  },[btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
