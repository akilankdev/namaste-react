import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/011/401/427/non_2x/food-signal-online-food-ordering-logo-design-order-food-on-internet-restaurant-cafe-meals-delivery-online-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={{"backgroundColor": "#f0f0f0"}}>
      <img className="res-logo" src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=appetizer-bowl-delicious-1640772.jpg&fm=jpg" />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.3 stars</h4>
      <h4>40 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (<div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCard resName="KFC" cuisine="Burgers"/>
      <RestaurantCard />
    </div>
  </div>);
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
