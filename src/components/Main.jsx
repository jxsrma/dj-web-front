// import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import Navbar from "./Web/navbar/Navbar";
// eslint-disable-next-line
import Home from "./Web/pages/home/Home";
// eslint-disable-next-line
import About from "./Web/pages/about/About";
// eslint-disable-next-line
import Footer from "./Web/footer/Footer";
// eslint-disable-next-line
// import Youtube from "./Youtube";
// eslint-disable-next-line
import Releases from "./Web/pages/releases/Releases";
import Song from "./Web/pages/releases/music/song/Song";
// eslint-disable-next-line
// import Music from "./Music";
// eslint-disable-next-line
// eslint-disable-next-line
import Contact from "./Web/pages/contact/Contact";
// eslint-disable-next-line
import Error404 from "./Web/pages/error404/Error404";
// eslint-disable-next-line
import Support from "./Web/pages/support/Support";
// eslint-disable-next-line
// import Login from "./admin/Login";
import Admin from "./admin/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./Web/loading/Loading";

import "./main.css";

function Main() {
  return (
    <div>
      {/* <Loading /> */}
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
            path="/release/:id"
            element={<Song title="Error 🚧" />} //active="activeLink" title="Official Site"
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
            path="/admin/*"
            element={<Admin title="Admin 💰" />} //active="activeLink" title="Official Site"
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
