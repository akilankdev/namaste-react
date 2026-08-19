import { CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";
import { use } from "react";

const ItemList = ({ items }) => {

  //We need useDispatch() to dispatch an action.
  const dispatch = useDispatch();
  const handleAddItem = ()=> {
    //We pass the action inside dispatch().Inside that action,whatever we pass,it will be pushed/inserted into the state items[] using the reducer().
    //dispatch() will return an object and it is passed to the reducer fn()."Biryani" is the 'action.payload' which we use in reducer fn().
    dispatch(addItem("Biryani"));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left"
        >
          <div className="flex justify-between">
            <div>
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price / 100}</span>
              </div>
              <p className="text-xs text-gray-600">{item.card.info.description}</p>
            </div>
            <div>
              <button className="absolute bg-black text-sm text-white ml-11 mt-10 rounded-sm p-0.5 cursor-pointer" onClick={handleAddItem}>Add +</button>
              <img src={CDN_URL + item.card.info.imageId} className="w-24 "></img>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
