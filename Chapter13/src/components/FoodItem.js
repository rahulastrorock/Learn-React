// import { CDN_URL } from "./../utils/constants";

const FoodItem = ({ name, description, category, price, imageId }) => {
  return (
    <div className="res-card w-[200px] outline shadow-lg m-3 bg-purple-200">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          imageId
        }
      />
      <h3 className="font-bold text-xl ">{name}</h3>
      <h4>{description}</h4>
      <h4>{category}</h4>
      <h4>₹{price / 100}</h4>
    </div>
  );
};

export default FoodItem;
