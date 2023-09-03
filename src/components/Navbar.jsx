import React, { useState } from "react";
import "../css/navbar.css";
import logo from "../images/JXSRMA.png";

import { Link, NavLink } from "react-router-dom";
// https://codepen.io/hitensharma/details/dybryGE
function Navbar() {
  // const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hcontainer, setNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="#home" onClick={() => setActive("home")}>
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div
            className={`navbar-hamburger ${isOpen ? "toggle" : ""}`}
            onClick={handleHamburgerClick}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li className={isOpen ? "open" : ""}>
              <NavLink
                to="/"
                className={active === "home" ? "nav-link-active" : ""}
                onClick={() => {
                  setActive("home");
                  setIsOpen(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li className={isOpen ? "open" : ""}>
              <NavLink
                to="/release"
                className={active === "release" ? "nav-link-active" : ""}
                onClick={() => {
                  setActive("release");
                  setIsOpen(false);
                }}
              >
                Releases
              </NavLink>
            </li>
            <li className={isOpen ? "open" : ""}>
              <NavLink
                to="/about"
                className={active === "about" ? "nav-link-active" : ""}
                onClick={() => {
                  setActive("about");
                  setIsOpen(false);
                }}
              >
                About
              </NavLink>
            </li>
            <li className={isOpen ? "open" : ""}>
              <NavLink
                to="/contact"
                className={active === "contact" ? "nav-link-active" : ""}
                onClick={() => {
                  setActive("contact");
                  setIsOpen(false);
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* <div className="navbar">
        <div className="navbar-content">
          <ul>
            <NavLink to="/">
              <img src={logo} alt="logo" className="navbar-logo" onClick={()=>setActive("home")} />
            </NavLink>
            <li>
              <NavLink to="/" className={ active === "home"?"navbar-content-active":""} onClick={()=>setActive("home")}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-releases" className={ active === "releases"?"navbar-content-active":""} onClick={()=>setActive("releases")} >Releases</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ active === "about"?"navbar-content-active":""} onClick={()=>setActive("about")}>about</NavLink>
            </li>
            <li>
              <NavLink to="#releases" className={ active === "contact"?"navbar-content-active":""} onClick={()=>setActive("contact")}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
