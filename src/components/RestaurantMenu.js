import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { useState } from "react";
// import "./restaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { id } = useParams();
  //console.log(id);

  const [showIndex, setShowIndex] = useState(0);
  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return <ShimmerUI />;
  // console.log(resInfo);
  const { name, avgRating, cuisines, totalRatingsString } =
    resInfo.cards[2]?.card?.card?.info;
  // console.log(name);
  const check = resInfo.cards.filter((item) => item.groupedCard);
  // console.log(check);
  const restaurantPageDataItems = check[0].groupedCard?.cardGroupMap?.REGULAR;
  // console.log(restaurantPageDataItems);

  const resItemsDetail = restaurantPageDataItems.cards.filter(
    (items) =>
      items.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(resItemsDetail);

  const resturantDishes = resItemsDetail.map((items) => items.card.card);
  // console.log(resturantDishes);

  return (
    <div className="restaurant-menu-con">
      <div className="restaurant-menu-head">
        <div>
          <h1 className="-head">{name}</h1>
          <div>
            <p className="restaurant-menu-cuisines">{cuisines.join(",")}</p>
          </div>
        </div>
        <div className="restaurant-menu-c2">
          <h4 className="restaurant-menu-rating">{avgRating}</h4>
          <h4 className="restaurant-menu-reviews">{totalRatingsString}</h4>
        </div>
      </div>
      <div>
        {resturantDishes.map((category, index) => (
          <RestaurantCategories
            key={category.title}
            data={category}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              // console.log(index);
              // important
              setShowIndex((prev) => (prev === index ? -1 : index));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
