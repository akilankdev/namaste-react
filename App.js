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

const restaurantList = [
  {
    type: "restaurant",
    data: {
      name: "KFC",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      costForTwo: 40000,
      deliveryTime: 38,
      imageLink:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=appetizer-bowl-delicious-1640772.jpg&fm=jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Domino's Pizza",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.2,
      costForTwo: 50000,
      deliveryTime: 30,
      imageLink: "https://clipart-library.com/2024/food-images/food-images-3.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "A2B - Adyar Ananda Bhavan",
      cuisines: ["South Indian", "Sweets", "Snacks"],
      avgRating: 4.4,
      costForTwo: 30000,
      deliveryTime: 25,
      imageLink: "https://img.freepik.com/premium-photo/food-photos_639785-169936.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Burger King",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.1,
      costForTwo: 45000,
      deliveryTime: 28,
      imageLink: "https://static.vecteezy.com/system/resources/previews/020/824/046/large_2x/assortment-of-healthy-protein-source-and-body-building-food-free-photo.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Saravana Bhavan",
      cuisines: ["South Indian", "Vegetarian"],
      avgRating: 4.5,
      costForTwo: 35000,
      deliveryTime: 32,
      imageLink: "https://thumbs.dreamstime.com/b/fresh-breakfast-eggs-food-photos-285707612.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Subway",
      cuisines: ["Healthy Food", "Salads", "Sandwiches"],
      avgRating: 4.0,
      costForTwo: 40000,
      deliveryTime: 27,
      imageLink: "https://img.freepik.com/premium-photo/food-photos_639785-169426.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Pizza Hut",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.2,
      costForTwo: 55000,
      deliveryTime: 35,
      imageLink: "https://www.pngmart.com/files/23/Food-PNG-Isolated-Pic.png",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Barbeque Nation",
      cuisines: ["BBQ", "North Indian", "Grill"],
      avgRating: 4.3,
      costForTwo: 80000,
      deliveryTime: 40,
      imageLink: "https://sukhis.com/app/uploads/2022/11/delicious-indian-veg-food.jpg",
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, imageLink, deliveryTime } = resData?.data; //Optional Chaining.
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={imageLink} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Cost for Two: {costForTwo / 100} Rupees</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={restaurantList[0]} />
        <RestaurantCard resData={restaurantList[1]} />
        <RestaurantCard resData={restaurantList[2]} />
        <RestaurantCard resData={restaurantList[3]} />
        <RestaurantCard resData={restaurantList[4]} />
        <RestaurantCard resData={restaurantList[5]} />
        <RestaurantCard resData={restaurantList[6]} />
        <RestaurantCard resData={restaurantList[7]} />        
      </div>
    </div>
  );
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
