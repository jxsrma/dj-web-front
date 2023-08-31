import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
// import About from "./About";
import Footer from "./Footer";
import Youtube from "./Youtube";
// import Releases from "./Releases";
// import Music from "./Music";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      {/* <Router> */}
        <Navbar />
         <Home/>
       <Youtube />
        {/* <Releases /> */}
        {/* <About /> */}
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
