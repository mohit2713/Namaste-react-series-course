import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import "./restaurantMenu.css";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        id
    );
    const json = await data.json();
    // const resMenuData =
    //   json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log(json.data);
    setResInfo(json.data);
  };

  if (resInfo === null) return <ShimmerUI />;

  //   const { name } = resInfo?.cards[3]?.card?.card?.itemCards[0]?.card?.info;
  //   console.log(name);
  const { name, avgRating, cuisines, totalRatingsString } =
    resInfo.cards[0]?.card?.card?.info;
  console.log(name);
  const resMenu =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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
        {/* <h2 className="res-list">{resMenu.itemCards[0].card.info.name}</h2> */}
        <h4>
          {resMenu.itemCards.map((item) => {
            return (
              <div>
                <ul>
                  <li>{item.card.info.name}</li>
                </ul>
              </div>
            );
          })}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantMenu;
