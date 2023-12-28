import React, { useEffect } from "react";
import "./home.css"
import Youtube from "../../youtube/Youtube";

function Home(props) {
  document.title = "JXSRMA | " + props.title;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="home-main" id="home">
        {/* <div className="home-image-container"> */}
        <img src="https://i.ibb.co/PFx9Bds/Glass.jpg" alt="" />
        <h1>Welcome</h1>
        <p>to the unknown music library</p>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/76RdxImQYMELfBJ99W7QsE?utm_source=generator&theme=0"
          title="Spotify"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          frameBorder={0}w
        ></iframe>
        <div className="home-social">
          <a
            href="https://instagram.com/jxsrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram fa-2xl"></i>
          </a>
          <a
            href="https://www.youtube.com/@jxsrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube fa-2xl"></i>
          </a>
          <a
            href="https://twitter.com/jxsrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter fa-2xl"></i>
          </a>
          <a
            href="https://www.twitch.tv/jxsrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitch fa-2xl"></i>
          </a>
        </div>
      </div>
      <Youtube />
    </>
  );
}

export default Home;
