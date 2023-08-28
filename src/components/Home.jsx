import React from "react";
import "../css/home.css";

function Home() {
  return (
    <div className="home-main" id="home">
      {/* <div className="home-image-container"> */}
      <img src="https://i.ibb.co/PFx9Bds/Glass.jpg" alt="" />
      <h1>Welcome</h1>
      <p>to the unknown music library</p>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/artist/76RdxImQYMELfBJ99W7QsE?utm_source=generator&theme=0"
        frameBorder="0"
        allowFullScreen=""
        title="Spotify"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <div className="home-social">
        <a
          href="https://instagram.com/jxsrma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-instagram fa-2xl"></i>
        </a>
        <a
          href="https://www.youtube.com/@jxsrma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-youtube fa-2xl"></i>
        </a>
        <a
          href="https://twitter.com/jxsrma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-x-twitter fa-2xl"></i>
        </a>
        <a
          href="https://www.twitch.tv/jxsrma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-twitch fa-2xl"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
