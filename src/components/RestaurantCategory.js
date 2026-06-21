import { useState } from "react";


//{data} - destructuring the props name and value
const RestaurantCategory = ({ data }) => {
  //For toggling ACCORDION style UI,initially false means menuitems wont show,when clicked showItems state becomes true and component rerenders with menuitems.
  const [showItems, setShowItems] = useState(false);

  const menuItems = data.itemCards;

  return (
    <>
      {/* shows the Category name */}
      <li onClick={() => setShowItems(!showItems)}>
        {data.title} ({data.itemCards.length})
      </li>

      {/* Shows Menu items if the category is clicked,otherwise menu items won't show */}
      {showItems && (
        <ul>
          {menuItems.map((MenuItem) => {
            return (
              <li key={MenuItem.card.info.id}>{MenuItem.card.info.name}</li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default RestaurantCategory;
