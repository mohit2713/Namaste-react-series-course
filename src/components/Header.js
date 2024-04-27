import { useState, useContext } from "react";
import { LOGO } from "./../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const checkStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a Selector

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO} />
      </div>
      <div className="navbar">
        <ul className="flex w-[100%] h-[100%] items-center mr-5">
          <li>Internet Status:{checkStatus ? "✅" : "🔴"}</li>
          <li>
            <Link
              className="p-3 mx-3 border-2 border-pink-200 rounded-lg"
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              className="p-3 mr-3 border-2 border-pink-200 rounded-lg"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="p-3 mr-3 border-2 border-pink-200 rounded-lg"
              to="/about"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="p-3 mr-3 border-2 border-pink-200 rounded-lg"
              to="/contact"
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              data-testid="headercartitems"
              className="p-3 font-bold mr-3 border-2 border-pink-200 rounded-lg"
              to="/cart"
            >
              Cart -({cartItems.length} items)
            </Link>
          </li>
          <button
            className="p-3 border-2 border-pink-200 rounded-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>
            <Link className="p-3 mx-3 font-bold border-2 border-pink-200 rounded-lg">
              {loggedInUser}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
