import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //Used this allRestaurants state variable to store the original list of restaurants and use it for filtering and resetting the filters. This way we can always refer back to the original list when needed.
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setListOfRestaurants(restaurantList);
    setAllRestaurants(restaurantList);
  }, []);

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
              const filteredList = allRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allRestaurants.filter(
              (res) => res.data.avgRating >= 4,
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Top-rated Restaurant
        </button>

        <button
          className="reset-filter"
          onClick={() => {
            setListOfRestaurants(allRestaurants);
          }}
        >
          Reset filters
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
