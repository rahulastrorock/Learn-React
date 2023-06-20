import FoodFireLogo from "../../Images/Food Fire Logo.png";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"; //this is used to get the cart data from the store

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnline();

  const { user } = useContext(UserContext); // here we are using the context to get the user data

  const cartItems = useSelector((store) => store.cart.items); //this is used to get the cart data from the store
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-slate-300  shadow-lg sm:bg-violet-50 md:bg-yellow-50">
      <div className="logo-container">
        <img data-testid="logo" className="h-28 p-2" src={FoodFireLogo} />
      </div>
      <div>
        <ul className="flex py-10">
          <li className="px-2 outline m-1">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 outline m-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 outline m-1">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 outline m-1">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2 outline m-1" data-testid="cart">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
          <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
          <button
            className="px-2 outline m-1"
            onClick={() => {
              btnName === "Login"
                ? alert("You are logged in")
                : alert("You are logged out");
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-2 outline m-1">{user.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
