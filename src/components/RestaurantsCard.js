import { CDN_URL } from "./../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantsCards = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div data-testid="resCard" className="w-[230px]">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-md"
      />
      <div className="res-data">
        <h3 className="font-bold">{resData.info.name}</h3>
        <h4>{avgRating}</h4>
        <h4 className="w-[80%] min-w-[200px] text-ellipsis whitespace-nowrap overflow-hidden">
          {cuisines}
        </h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
        <h4>{loggedInUser}</h4>
      </div>
    </div>
  );
};

// Higer Order Component  is a function that takes a component and returns a component.

// Input - restaurantCard ==> restaurantCardPromoted

// High order component used to enhance the component

export const WithPromotedLabel = (RestaurantsCards) => {
  return (props) => {
    return (
      <div>
        <label className=" p-1 rounded-sm absolute bg-lime-200 ">Opened</label>
        <RestaurantsCards {...props} />
      </div>
    );
  };
};
export default RestaurantsCards;
