import { useEffect, useState, useContext } from "react";
// import Header from "./Header";
// import RES_DATA from "./../utils/mockData";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import RestaurantsCards, { WithPromotedLabel } from "./RestaurantsCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setListFilterRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // console.log(filterRestaurants);
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantsCards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    const filterResCards = json.data?.cards?.filter(
      (f) => f.card?.card?.id === "restaurant_grid_listing"
    );
    // console.log(filterResCards);

    const resListData =
      filterResCards[0].card?.card?.gridElements?.infoWithStyle?.restaurants;
    // optional chaining
    //console.log(resListData);
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

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (listOfRestaurants.length === 0) return <ShimmerUI />;
  return (
    <div className="body">
      <div className="flex mt-2">
        <div className="p-2 m-2">
          <input
            data-testid="searchInputText"
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

          <label className="ml-2">UserName: </label>
          <input
            className=" border border-black p-1 rounded-sm"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap px-4  ">
        {filterRestaurants.map((restaurant) => {
          // console.log(restaurant.info.id);
          return (
            <div
              key={restaurant.info.id}
              className="p-2 m-8 border border-gray-200 bg-gray-100 rounded-md"
            >
              <Link to={"/restaurants/" + restaurant.info.id}>
                {restaurant.info.isOpen ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantsCards resData={restaurant} />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
