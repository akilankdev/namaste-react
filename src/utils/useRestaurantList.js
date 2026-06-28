import { RESTAURANT_LIST_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  //List is fetched only once.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_LIST_API);
      const json = await data.json();

      const restaurants =
        json.data.data.cards[1].card.card.gridElements.infoWithStyle
          .restaurants;

      setListOfRestaurants(restaurants);
    } catch (err) {
      console.log("ERROR :", err);
    }
  };
  return listOfRestaurants;
};

export default useRestaurantList;