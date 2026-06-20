import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { name } = resInfo?.data?.cards[2]?.card?.card?.info || {}; //Initially 'resInfo?.data?.cards[2]?.card?.card?.info' is UNDEFINED,so it will throw error if we try to destructure the 'name'. {} simply makes the 'name' as undefined bcz there is no 'name' field inside the object.This prevents the error safely and puts name as UNDEFINED.
  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/123456",
    );
    const json = await data.json();
    setResInfo(json);
  };

  

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Cold Drinks</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
