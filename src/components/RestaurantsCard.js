import { CDN_URL } from "./../utils/constants";
const RestaurantsCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <div className="res-data">
        <h3>{resData.info.name}</h3>
        <h4>{avgRating}</h4>
        <h4 className="res-cuisines">{cuisines}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};

export default RestaurantsCards;
