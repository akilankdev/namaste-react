import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import {MENU_API} from "../utils/constants"

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  /* const params = useParams();
  console.log(params); Gives us an OBJECT */
  const {resId} = useParams();
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      //Dynamic Restaurant ID is being put in the Menu API.Now it should show menu based on the URL's ID parameter.Try it out.
      MENU_API + resId,
    );
    const json = await data.json();
    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    areaName,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    locality,
    sla,
    totalRatingsString,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};
 
  //Gets Category array
  const cards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards || [];
  //Filters the empty categories.
  const categories = cards.filter((category) => category?.card?.card?.title);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{avgRatingString}</h2>
      <h2>{totalRatingsString}</h2>
      <h2>
        {locality}, {areaName}
      </h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{cuisines.join(" ,")}</h2>
      <h2>{sla.slaString}</h2>

      <h3>Menu</h3>
      <ul>
        {
          //SHould show Categories here.
        categories.map((category) => {
          return (
            <RestaurantCategory key={category.card.card.title} data={category.card.card}/>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
