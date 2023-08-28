import React from "react";
import "../css/youtube.css";

function Youtube() {
  return (
    <div className="youtube-main">
      <p>
        <i class="fa-brands fa-youtube"></i>
        &nbsp; Youtube
      </p>
      <div className="youtube-main-gallery">
        <iframe
          width="1280"
          height="533"
          src="https://www.youtube.com/embed/fPWfTaDFaLg"
          title="JXSRMA - Athena"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Youtube;
