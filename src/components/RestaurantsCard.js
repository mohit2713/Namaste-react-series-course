import { CDN_URL } from "./../utils/constants";
const RestaurantsCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="w-[250px]">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-md"
      />
      <div className="res-data">
        <h3 className="font-bold">{resData.info.name}</h3>
        <h4>{avgRating}</h4>
        <h4 className="w-[80%] min-w-[200px] text-ellipsis whitespace-nowrap overflow-hidden">{cuisines}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};

export default RestaurantsCards;
