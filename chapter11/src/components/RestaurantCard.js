import { CDN_URL } from "./../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  const { user } = useContext(UserContext);
  // console.log("Data=>", data.user.name);
  return (
    <div className="res-card w-[200px] outline shadow-lg m-3 bg-purple-200">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl ">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
      <span className="text-blue-500">{user.name}</span>
    </div>
  );
};

export default RestaurantCard;
