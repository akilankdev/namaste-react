import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  /* const params = useParams();
  console.log(params); Gives us an OBJECT */

  const { resId } = useParams();

  //useRestaurantMenu() is a Custom hook which handles the logic of fetching the Menu data.By doin this,our code is much cleaner and testable.Now this component solely handles only the UI part,not the logic part.
  const resInfo = useRestaurantMenu(resId);

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
    <div className="text-center">
      <h1 className="font-bold m-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      {categories.map((category) => 
        <RestaurantCategory data={category?.card?.card} /> )}
    </div>
  );
};

export default RestaurantMenu;
