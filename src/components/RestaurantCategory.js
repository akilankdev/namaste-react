import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowItems,index }) => {

  const handleClick = () => {
    //this will call the setShowIndex(index) in the parent.
    setShowItems(index);
  }
  return (
    <div>
      {/* w-6/12 is used to allocate half the width because tailwind divides page into 12 sections. */}

      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
      
        { showItems && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
