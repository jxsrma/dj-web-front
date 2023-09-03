import React, { useEffect } from "react";
import "../css/releases.css";
import Music from "./Music";

function Releases() {
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
