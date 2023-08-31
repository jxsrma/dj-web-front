import React from "react";
import "../css/footer.css";
function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-row">

        <div className="footer-col">
          <h4>Follow</h4>
          <ul>
            <li>
              <a
                href="https://instagram.com/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-instagram"
                  style={{ marginRight: "10px" }}
                ></i>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-youtube"
                  style={{ marginRight: "10px" }}
                ></i>
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/JXSRMA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-facebook"
                  style={{ marginRight: "10px" }}
                ></i>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-x-twitter"
                  style={{ marginRight: "10px" }}
                ></i>
                X
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/9DkvHyYWBE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-discord"
                  style={{ marginRight: "10px" }}
                ></i>
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://www.twitch.tv/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-twitch"
                  style={{ marginRight: "10px" }}
                ></i>
                Twitch
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Stream</h4>
          <ul>
            <li>
              <a
                href="https://open.spotify.com/artist/76RdxImQYMELfBJ99W7QsE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-spotify"
                  style={{ marginRight: "10px" }}
                ></i>
                Spotify
              </a>
            </li>
            <li>
              <a
                href="https://soundcloud.com/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-soundcloud"
                  style={{ marginRight: "10px" }}
                ></i>
                SoundCloud
              </a>
            </li>
            <li>
              <a
                href="https://music.amazon.in/artists/B08PNSQ44V/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-amazon"
                  style={{ marginRight: "10px" }}
                ></i>
                Amazon
              </a>
            </li>
            <li>
              <a
                href="https://music.apple.com/in/artist/jxsrma/1542925618"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-apple" style={{ marginRight: "10px" }}></i>
                Apple
              </a>
            </li>
            <li>
              <a
                href="https://songwhip.com/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fas fa-headphones"
                  style={{ marginRight: "10px" }}
                ></i>
                JioSaavan & more
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Info</h4>
          <ul>
            {/* <li><Link to="/contact"><i className="fas fa-headset" style={{marginRight: "10px"}}></i>Contact Us</Link></li> */}
            <li>
              <a href="mailto: jxsrma@gmail.com">
                <i
                  class="fa-regular fa-envelope"
                  style={{ marginRight: "10px" }}
                ></i>
                Send Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jash-sharma-607940182/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-code" style={{ marginRight: "10px" }}></i>
                About Developer
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Hacker00619/jxsrmaweb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-github"
                  style={{ marginRight: "10px" }}
                ></i>
                Github Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; Copyright {new Date().getFullYear()}, JXSRMA
      </div>
    </footer>
  );
}

export default Footer;
