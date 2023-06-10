import FoodFireLogo from "../../Images/Food Fire Logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={FoodFireLogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
          <h1>{isOnline ? "✅" : "🔴"}</h1>
          <button
            className="login-btn"
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
