import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

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

  //this return statement should be below useEffect and fetchData() otherwise if the return statement executes then it returns and useEffect and fetchData never gets executed(if they are below the return statement)
  //why do we need this shimmer?initially resInfo is null so just shows shimmer.then useEffect fetched the data and rerenders our component with the fetched resInfo.
  if (resInfo === null) return <Shimmer />;

  //This line should stay below the if condition.
  //Restaurant overall Info:
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
 
  //for getting different categories for menu.
  const cards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards || [];

  //Filtering the categories which are not empty,There is one empty category object in the response.If we dont filter,that empty object is iterated in MAP method,it causes some ERROR.THats why we filtered the empty object.

  //Also without optional chaining,the empty object would throw error.Bcz,undefined.card gives ERROR.Optional chaining immediately returns undefined,Since its a FALSY value,filter method ignores the object.
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
        //shows the Menu category names from the resInfo.This is the first step before showing complex menu cards...
        categories.map((category) => {
          return (
            //Optional chaining is no needed if all categories have those data.
            <li key={category.card.card.title}>
              {category.card.card.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
