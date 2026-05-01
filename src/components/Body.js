import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState,useEffect } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(()=>{
    setListOfRestaurants(restaurantList);
  },[]);

  if(listOfRestaurants.length === 0){
    return <h1>Loading...</h1>;
  }
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
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
            setListOfRestaurants(restaurantList);
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
