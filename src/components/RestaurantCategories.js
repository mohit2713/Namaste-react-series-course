import { RESFOODPICS } from "../utils/constants";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategories = (props) => {
  //console.log(props.setShowIndex);
  // console.log(props.data.itemCards);

  const handleClick = () => {
    // console.log("click");
    props.setShowIndex();
  };
  return (
    <div>
      {/* header */}
      <div>
        <div
          className=" flex w-6/12 shadow-lg mx-auto my-6 p-4 justify-between cursor-pointer 
         "
          onClick={handleClick}
        >
          <div>
            <span className="font-bold text-md ">
              {props.data.title} ({props.data.itemCards.length})
            </span>
          </div>
          <div>{"▼"}</div>
        </div>
        {/* Accordian body */}
        {/* important code */}
        {/* showItems */}

        {props.showItems && <ItemList itemCards={props.data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategories;
