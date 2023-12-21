import React from "react";
import "../css/footer.css";
import { NavLink } from "react-router-dom";
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
                <i className="fab fa-instagram"></i>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter"></i>X
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/9DkvHyYWBE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-discord"></i>
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://www.twitch.tv/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitch"></i>
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
                <i className="fab fa-spotify"></i>
                Spotify
              </a>
            </li>
            <li>
              <a
                href="https://soundcloud.com/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-soundcloud"></i>
                SoundCloud
              </a>
            </li>
            <li>
              <a
                href="https://music.amazon.in/artists/B08PNSQ44V/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-amazon"></i>
                Amazon
              </a>
            </li>
            <li>
              <a
                href="https://music.apple.com/in/artist/jxsrma/1542925618"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-apple"></i>
                Apple
              </a>
            </li>
            <li>
              <a
                href="https://songwhip.com/jxsrma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-headphones"></i>
                JioSaavan & more
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>More</h4>
          <ul>
            {/* <li><Link to="/contact"><i className="fas fa-headset" style={{marginRight: "10px"}}></i>Contact Us</Link></li> */}
            <li>
              <NavLink to="/contact">
                <i class="fa-regular fa-envelope"></i>
                Send Email
              </NavLink>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jashsharma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-code"></i>
                About Developer
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Hacker00619/jxsrmaweb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                Github Repo
              </a>
            </li>
            <li>
              <NavLink to="/support" rel="noopener noreferrer">
                <span className="gold">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                  Support Me
                </span>
              </NavLink>
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
