import { useState } from "react";
import { LOGO } from "./../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const checkStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO} />
      </div>
      <div className="navbar">
        <ul className="flex w-[100%] h-[100%] items-center mr-5">
          <li className="p-3 mr-3 border-2 border-pink-200 rounded-lg">
            Internet Status:{checkStatus ? "✅" : "🔴"}
          </li>
          <li className="p-3 mr-3 border-2 border-pink-200 rounded-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-3 mr-3 border-2 border-pink-200 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 mr-3 border-2 border-pink-200 rounded-lg">
            <Link to="/about">About us</Link>
          </li>
          <li className="p-3 mr-3 border-2 border-pink-200 rounded-lg">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-3 mr-3 border-2 border-pink-200 rounded-lg">
            <Link>Cart</Link>
          </li>
          <button
            className="p-3 border-2 border-pink-200 rounded-lg"
            onClick={() => {
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
