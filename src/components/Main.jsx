// import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import Navbar from "./navbar/Navbar";
// eslint-disable-next-line
import Home from "./home/Home";
// eslint-disable-next-line
import About from "./about/About";
// eslint-disable-next-line
import Footer from "./footer/Footer";
// eslint-disable-next-line
// import Youtube from "./Youtube";
// eslint-disable-next-line
import Releases from "./releases/Releases";
// eslint-disable-next-line
// import Music from "./Music";
// eslint-disable-next-line
import Loading from "./loading/Loading";
// eslint-disable-next-line
import Contact from "./contact/Contact";
// eslint-disable-next-line
import Error404 from "./error404/Error404";
// eslint-disable-next-line
import Support from "./support/Support";
// eslint-disable-next-line
// import Login from "./admin/Login";

import "./main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./admin/Login";

function Main() {
  return (
    <div>
      <Loading />
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home title="Official Site 🏠" />} //active="activeLink" title="Official Site"
          />
          <Route
            exact
            path="/release"
            element={<Releases title="Releases 🎶" />} //active="activeLink" title="Official Site"
          />
          <Route
            exact
            path="/Contact"
            element={<Contact title="Contact 📩" />} //active="activeLink" title="Official Site"
          />
          <Route
            exact
            path="/about"
            element={<About title="About 📖" />} //active="activeLink" title="Official Site"
          />
          <Route
            exact
            path="/support"
            element={<Support title="Support 💰" />} //active="activeLink" title="Official Site"
          />
          <Route
            exact
            path="/admin"
            element={<Login title="Support 💰" />} //active="activeLink" title="Official Site"
          />
          <Route
            path="/*"
            element={<Error404 title="Error 🚧" />} //active="activeLink" title="Official Site"
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Main;
