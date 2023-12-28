import React from "react";
import "./youtube.css";
// import Fade from 'react-reveal'

function Youtube() {
  return (
    <div className="youtube-main">
      <div className="youtube-heading">
        Listen my Latest release on&nbsp;
        <img
          src="https://freelogopng.com/images/all_img/1656504144youtube-logo-png-white.png"
          alt=""
        />
      </div>
      <div className="youtube-content">
        <div className="youtube-main-gallery">
          <iframe
            src="https://www.youtube.com/embed/fPWfTaDFaLg"
            title="JXSRMA - Athena"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder={0}
          ></iframe>
        </div>
        <div className="youtube-para">
          <p>
            Welcome to the official YouTube channel of JXSRMA! 🔥 Dive into a
            world of electrifying beats, futuristic melodies, and captivating
            sounds.
          </p>
          <p>
            🎶 JXSRMA is a talented music producer and artist, pushing the
            boundaries of electronic music genres.
          </p>
          <p>
            Subscribe now and hit the notification bell 🔔 to never miss a beat!
            Get ready to immerse yourself in the sonic world of JXSRMA and
            experience the power of electronic music like never before. 💥
          </p>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
