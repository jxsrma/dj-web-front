import React, { useEffect } from "react";
import "../css/error404.css";
import { NavLink } from "react-router-dom";
function Error404(props) {
  document.title = "JXSRMA | " + props.title;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="error-main">
      <h1>Error 404!</h1>
      <div>
        <p>
          🚧 Oops! It seems you've ventured into uncharted musical territory.
          🎵🌍
        </p>
        <p>
          The music you're looking for may have taken a detour or a brief
          intermission. 🎶🎩
        </p>
        <p>But don't worry, you are never too far away. 🎧🌈</p>
        <p>
          Head back to the homepage and let's find your rhythm together! 🏠🕺🎶
        </p>
      </div>
      <div className="home-button">
      <NavLink to="/">Home</NavLink>
      </div>
    </div>
  );
}

export default Error404;
