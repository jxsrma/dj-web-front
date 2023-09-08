import React from "react";
// eslint-disable-next-line
import Navbar from "./Navbar";
// eslint-disable-next-line
import Home from "./Home";
// eslint-disable-next-line
import About from "./About";
// eslint-disable-next-line
import Footer from "./Footer";
// eslint-disable-next-line
import Youtube from "./Youtube";
// eslint-disable-next-line
import Releases from "./Releases";
// eslint-disable-next-line
import Music from "./Music";
// eslint-disable-next-line
import Loading from "./Loading";
// eslint-disable-next-line
import Contact from "./Contact";
// eslint-disable-next-line
import Error404 from "./Error404";
// eslint-disable-next-line
import Support from "./Support";
// eslint-disable-next-line
import Login from "./admin/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Loading />
      <Router>
        <Navbar />
        {/* <Home />
      <Youtube />
      <Releases />
      <About />
      <Music/> */}
        <Routes>
          <Route
            exact
            path="/"
            element={<Home title="Official Site 🏠"/>} //active="activeLink" title="Official Site"
          />

          <Route
            exact
            path="/release"
            element={<Releases title="Releases 🎶"/>} //active="activeLink" title="Official Site"
          />
          {/* 
          <Route
            exact
            path="/music"
            element={<Music />} //active="activeLink" title="Official Site"
          /> */}

          <Route
            exact
            path="/Contact"
            element={<Contact title="Contact 📩"/>} //active="activeLink" title="Official Site"
          />
          <Route
            exact
            path="/about"
            element={<About title="About 📖"/>} //active="activeLink" title="Official Site"
          />
          <Route
            exact
            path="/support"
            element={<Support title="Support 💰"/>} //active="activeLink" title="Official Site"
          />
          {/* <Route
            path="/admin"
            element={<Login />} //active="activeLink" title="Official Site"
          /> */}
          <Route
            path="/*"
            element={<Error404 title="Error 🚧"/>} //active="activeLink" title="Official Site"
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Main;
