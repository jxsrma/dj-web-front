import React, { useEffect, useState } from "react";
import "./youtube.css";
// import Fade from 'react-reveal'

import { fetchYoutubeLink } from "../../../functions/musicUtils";
import { useDispatch, useSelector } from "react-redux";
import { loadYoutube } from "../../../store/actions/music-actions";

function Youtube() {
  const dispatch = useDispatch();
  const youtube = useSelector((state) => state.music.youtube);

  useEffect(() => {
    fetchYTData();
  }, []);
  const fetchYTData = async () => {
    try {
      await dispatch(loadYoutube());
      // console.log(youtube);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
            src={"https://www.youtube.com/embed/" + youtube}
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
