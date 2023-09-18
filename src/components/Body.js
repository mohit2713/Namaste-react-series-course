import { useEffect, useState } from "react";
import Header from "./Header";
import RestaurantsList from "./RestaurantsList";
import RES_DATA from "./../utils/mockData";
import ShimmerUI from "./ShimmerUI";

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
  if (listOfRestaurants.length === 0) return <ShimmerUI />;
  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="searchbar"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
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
        </div>
        <button
          className="Filter-btn"
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
      <div className="res-container">
        <RestaurantsList filterRestaurants={filterRestaurants} />
      </div>
    </div>
  );
};

export default Body;
