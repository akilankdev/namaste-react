import {useEffect} from "react";

const RestaurantMenu = () => {

  useEffect(()=> {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurantMenu/123456");
    const json = await data.json();

    console.log(json);
  }

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Cold Drinks</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;