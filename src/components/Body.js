import RestaurantCard from "./RestaurantCard";
import useRestaurantList from "../utils/useRestaurantList";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  
  //custom hook to fetch API data
  const listOfRestaurants = useRestaurantList();

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  //we should include the state variable's value inside dependancy array.
  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  },[listOfRestaurants]);

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
    return (
      <h1>Looks like you are offline!Please check your internet connection.</h1>
    );

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5,
            );

            setFilteredRestaurants(filteredList);
          }}
        >
          Top-rated Restaurant
        </button>

        <button
          className="reset-filter"
          onClick={() => {
            setFilteredRestaurants(listOfRestaurants);
          }}
        >
          Reset filters
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="restaurant-card-link"
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
