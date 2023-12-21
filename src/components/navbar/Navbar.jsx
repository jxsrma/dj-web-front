import React, { useState } from "react";
import "../css/navbar.css";
import logo from "../images/JXSRMA.png";
import support from "../images/support.png";
import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";
// https://codepen.io/hitensharma/details/dybryGE
function Navbar() {
  // const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <NavLink
              to="/"
              className={location.pathname === "/" ? "nav-link-active" : ""}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <img src={logo} alt="Logo" />
            </NavLink>
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
                className={location.pathname === "/" ? "nav-link-active" : ""}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li className={isOpen ? "open" : ""}>
              <NavLink
                to="/release"
                className={
                  location.pathname === "/release" ? "nav-link-active" : ""
                }
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Releases
              </NavLink>
            </li>
            <li className={isOpen ? "open" : ""}>
              <NavLink
                to="/about"
                className={
                  location.pathname === "/about" ? "nav-link-active" : ""
                }
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                About
              </NavLink>
            </li>
            <li className={isOpen ? "open" : ""}>
              <NavLink
                to="/contact"
                className={
                  location.pathname === "/contact" ? "nav-link-active" : ""
                }
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {window.location.pathname === "/support" ? (
                ""
              ) : (
                <NavLink
                to="/support"
                className={
                  location.pathname === "/contact" ? "nav-link-active cont-support-icon" : "cont-support-icon"
                }
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <img className="support-icon" src={support} alt="" />
                <div class="img-overlay"></div>
              </NavLink>
              )}
        </div>
      </nav>

      {/* <div className="navbar">
        <div className="navbar-content">
          <ul>
            <NavLink to="/">
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
