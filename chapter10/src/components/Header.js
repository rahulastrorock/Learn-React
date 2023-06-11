import FoodFireLogo from "../../Images/Food Fire Logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-slate-300  shadow-lg sm:bg-violet-50 md:bg-yellow-50">
      <div className="logo-container">
        <img className="h-28 p-2" src={FoodFireLogo} />
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
          <li className="px-2 outline m-1">Cart</li>
          <h1>{isOnline ? "✅" : "🔴"}</h1>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
