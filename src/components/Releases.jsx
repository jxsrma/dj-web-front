import React, { useEffect } from "react";
import "../css/releases.css";
function Releases() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])
  // https://codepen.io/Cyanek-S/pen/oNQwdEb
  return (
    <div className="releases" id="release">
      <div className="releases-gallery-more">More&gt;</div>
    </div>
  );
}

export default Releases;
