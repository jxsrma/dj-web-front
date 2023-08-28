import React, { useState } from "react";
import "../css/navbar.css";
import logo from "../images/JXSRMA.png";
function Navbar() {
  const [active, setActive] = useState("home");
  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <ul>
            <a href="#home">
              <img src={logo} alt="logo" className="navbar-logo" onClick={()=>setActive("home")} />
            </a>
            <li>
              <a href="#home" className={ active === "home"?"navbar-content-active":""} onClick={()=>setActive("home")}>Home</a>
            </li>
            <li>
              <a href="#bio" className={ active === "bio"?"navbar-content-active":""} onClick={()=>setActive("bio")}>Bio</a>
            </li>
            <li>
              <a href="#releases" className={ active === "releases"?"navbar-content-active":""} onClick={()=>setActive("releases")} >Releases</a>
            </li>
            <li>
              <a href="#releases" className={ active === "contact"?"navbar-content-active":""} onClick={()=>setActive("contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
