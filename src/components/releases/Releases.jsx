import React, { useEffect } from "react";
import "./releases.css";
import Music from "../music/Music";

function Releases(props) {
  document.title = "JXSRMA | " + props.title;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  // https://codepen.io/Cyanek-S/pen/oNQwdEb
  return (
    <div className="releases" id="release">
      <Music />
    </div>
  );
}

export default Releases;
