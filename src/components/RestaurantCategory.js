import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  //For toggling ACCORDION style UI
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
              <li key={MenuItem.card.info.id}>{MenuItem.card.info.name} - {"Rs."}{MenuItem.card.info.price / 100}</li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default RestaurantCategory;
