import { useEffect, useState } from "react";
// import Header from "./Header";
import RestaurantsList from "./RestaurantsList";
// import RES_DATA from "./../utils/mockData";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setListFilterRestaurants] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resListData =
      json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // optional chaining
    setListOfRestaurants(resListData);
    setListFilterRestaurants(resListData);
  };

  const checkInternetStatus = useOnlineStatus();

  if (checkInternetStatus === false) {
    return (
      <h1>
        Seems like you are Offline!! Please check your Internet connection
      </h1>
    );
  }

  if (listOfRestaurants.length === 0) return <ShimmerUI />;
  return (
    <div className="body">
      <div className="flex mt-2">
        <div className="p-2 m-2">
          <input
            className=" p-2 border rounded-md h-8 outline-none"
            type="text"
            placeholder="searchbar"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          ></input>
          <button
            className=" py-2 px-3 ml-4 rounded-md bg-green-100 border border-gray-200"
            onClick={() => {
              const searchRestaurants = listOfRestaurants.filter(
                (searchres) => {
                  return searchres.info.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
                }
              );
              setListFilterRestaurants(searchRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="py-2 px-3 ml-4 rounded-md bg-purple-100 border border-gray-200"
            onClick={() => {
              const filter = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4.3;
              });
              setListFilterRestaurants(filter);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap px-4 ">
        <RestaurantsList filterRestaurants={filterRestaurants} />
      </div>
    </div>
  );
};

export default Body;
