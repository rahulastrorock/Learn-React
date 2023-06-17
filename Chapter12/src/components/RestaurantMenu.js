import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants"; // not required as we are using custom hook
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurant(resId); // custom hook to fetch data which implements below commented code.

  const dispatchEvent = useDispatch(); //dispatch event is coming from useDispatch hook

  const addFoodItem = (item) => {
    dispatchEvent(addItem(item));
  };
  const removeFoodItem = (item) => {
    dispatchEvent(removeItem(item));
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log(itemCards);
  return (
    <div className="m-2">
      <h1 className="font-bold">{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2 className="font-bold">Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item.card.info.name}-{item.card.info.price / 100} -{" "}
            <button
              className="p-1 m-1 bg-green-300"
              onClick={() => addFoodItem(item.card.info)}
            >
              Add
            </button>
            <button
              className="p-1 m-1 bg-red-300"
              onClick={() => removeFoodItem(item.card.info)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
