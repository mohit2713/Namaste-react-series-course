import { Link } from "react-router-dom";
import RestaurantsCards from "./RestaurantsCard";

const RestaurantsList = (dataOfRestaurants) => {
  const DataList = dataOfRestaurants.filterRestaurants;
  return DataList.map((items) => {
    console.log(items.info.id);
    return (
      <Link key={items.info.id} to={"/restaurants/" + items.info.id}>
        <RestaurantsCards resData={items} />
      </Link>
    );
  });
};

export default RestaurantsList;
