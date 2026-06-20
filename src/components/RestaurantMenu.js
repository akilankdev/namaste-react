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
    console.log(json);//shows menu details
    setResInfo(json);
    console.log(resInfo); //this would show null,because,React doesnt immediately update the state var's value,only after the current callback is done,thats when it updates and rerenders the component.Thats y it shows null
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {console.log(resInfo) /*shows menu details*/}
      <h1>Restaurant Name</h1>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Cold Drinks</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

/*
Flow of state update for understanding:

1.setResInfo(json) is called.
2.React schedules a state update.
3.console.log(resInfo) runs and sees the old value.
4.fetchData() finishes executing.
5.React processes the queued state update.
6.React re-renders the component with the new resInfo.
*/
