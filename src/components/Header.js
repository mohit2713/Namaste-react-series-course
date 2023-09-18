import { useState } from "react";
import { LOGO } from "./../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO} />
      </div>
      <div className="navbar">
        <ul className="nav-items">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About us</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="nav-link">
            <Link>Cart</Link>
          </li>
          <button
            className="nav-btn"
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
