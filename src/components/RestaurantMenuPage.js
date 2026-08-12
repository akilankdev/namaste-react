import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {

  const [showIndex,setShowIndex] = useState(null);
  
  const { resId } = useParams();

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
      {categories.map((category,index) => 
        <RestaurantCategory 
        key={category?.card?.card?.title}
        data={category?.card?.card}
        index={index}
        //the below condition will check whether the current component's index is similar to state variable's value.If its true then expand otherwise no need to render <ItemsList />.
        showItems={index === showIndex && true}
        setShowItems={setShowIndex}
        //INDEX is used to expand one accordion at once.We pass the INDEX and UPDATION of state variable to the child through PROPS so that when the user clicks the accordion,it changes the state variable value to current index and that will make the current accordion expanded and keep the others as collapsed.
        /> )}
    </div>
  );
};

export default RestaurantMenu;
