import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { name,areaName,avgRatingString,costForTwoMessage,cuisines,locality,sla,totalRatingsString } = resInfo?.data?.cards[2]?.card?.card?.info || {}; 
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
      <h2>{avgRatingString}</h2>
      <h2>{totalRatingsString}</h2>
      <h2>{locality}, {areaName}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{cuisines.join(" ,")}</h2>
      <h2>{sla.slaString}</h2>
      
      <h3>Menu</h3>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Cold Drinks</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
