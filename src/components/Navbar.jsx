import React from "react";
import "../css/navbar.css";
import logo from "../images/JXSRMA.png";
function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <ul>
            <img src={logo} alt="logo" className="navbar-logo" />
              <li>Home</li>
              <li>Bio</li>
              <li>Releases</li>
              <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
