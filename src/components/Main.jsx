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
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      {/* <Loading /> */}
      {/* <Router> */}
      <Navbar />
      <Home />
      {/* <Youtube /> */}
      {/* <Releases /> */}
      {/* <About /> */}
      {/* <Music/> */}
      {/* <Routes>
          <Route
            exact
            path="/"
            element={<Home  />} //active="activeLink" title="Official Site"
          />
          
          
          <Route
            exact
            path="/all-releases"
            element={ <Releases />} //active="activeLink" title="Official Site"
          />

          <Route
            exact
            path="/music"
            element={ <Music />} //active="activeLink" title="Official Site"
          />
         
         <Route
            exact
            path="/about"
            element={ <About />} //active="activeLink" title="Official Site"
          />

        </Routes> */}
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default Main;
