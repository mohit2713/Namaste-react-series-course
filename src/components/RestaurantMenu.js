import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import "./restaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  // console.log(id);

  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return <ShimmerUI />;

  const { name, avgRating, cuisines, totalRatingsString } =
    resInfo.cards[0]?.card?.card?.info;
  // console.log(name);

  // if (
  //   resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     ?.categories
  // ) {
  //   const resMenu =
  //     resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //       ?.categories[0];
  // }

  const resMenu =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resMenu);

  return (
    <div className="restaurant-menu-con">
      <div className="restaurant-menu-head">
        <div>
          <h1 className="restaurant-menu-head">{name}</h1>
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
        <h4>
          {/* {() => {
            if (resMenu.categories) {
              {
                resMenu.categories[0].itemCards.map((item) => {
                  return (
                    <div>
                      <ul>
                        <li>{item.card.info.name}</li>
                      </ul>
                    </div>
                  );
                });
              }
            } else {
              {
                resMenu.itemCards.map((item) => {
                  return (
                    <div>
                      <ul>
                        <li>{item.card.info.name}</li>
                      </ul>
                    </div>
                  );
                });
              }
            }
          }} */}
        </h4>
        <h4>
          {resMenu.itemCards.map((item) => {
            return <li key={item.card.info.id}>{item.card.info.name}</li>;
          })}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantMenu;
