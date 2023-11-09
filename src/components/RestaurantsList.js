import { Link } from "react-router-dom";
import RestaurantsCards from "./RestaurantsCard";

const RestaurantsList = (dataOfRestaurants) => {
  const DataList = dataOfRestaurants.filterRestaurants;
  return DataList.map((items) => {
    // console.log(items.info.id);
    return (
      <Link
        className="p-2 m-8 border border-gray-200 bg-gray-100 rounded-md"
        key={items.info.id}
        to={"/restaurants/" + items.info.id}
      >
        <RestaurantsCards resData={items} />
      </Link>
    );
  });
};

export default RestaurantsList;
