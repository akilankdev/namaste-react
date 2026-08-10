import { useState } from "react";

const RestaurantCategory = ( {data} ) => {
  console.log(data);
  return (
   <div>
    {/* w-6/12 is used to allocate half the width because tailwind divides page into 12 sections. */}

      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg flex justify-between p-4">
        <span className="font-bold text-sm">{data.title} ({data.itemCards.length})</span>
        {/* press win + ; for emojis */}
        <span>🔽</span>
      </div>
   </div>
  );
};

export default RestaurantCategory;
