import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../css/music.css";
function Music() {
  const [year, setYear] = useState("latest");
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])

  return (
    <div className="music-container" id="music-top">
      <div className="music-heading">All Releases</div>
      <div className="music-release-years">
        <ul>
          <li>
            <Link
              to="music-top"
              className={year === "latest" ? "music-release-years-active" : ""}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setYear("latest")}
            >
              Latest
            </Link>
          </li>
          <li>
            <Link
              to="2023"
              className={year === "2023" ? "music-release-years-active" : ""}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setYear("2023")}
            >
              2023
            </Link>
          </li>
          <li>
            <Link
              to="2022"
              className={year === "2022" ? "music-release-years-active" : ""}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setYear("2022")}
            >
              2022
            </Link>
          </li>
          <li>
            <Link
              to="2021"
              className={year === "2021" ? "music-release-years-active" : ""}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setYear("2021")}
            >
              2021
            </Link>
          </li>
          <li>
            <Link
              to="2020"
              className={year === "2020" ? "music-release-years-active" : ""}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setYear("2020")}
            >
              2020
            </Link>
          </li>
          <li>
            <Link
              to="2019"
              className={year === "2019" ? "music-release-years-active" : ""}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setYear("2019")}
            >
              2019
            </Link>
          </li>
        </ul>
      </div>

      <div className="music-container-card" id="latest">
        <div className="year-heading">LATEST</div>
        <div className="music-year">Latest</div>
        <div className="music-card-grid">
          <div className="music-card">
            <div className="music-image" style={{ paddingTop: "2vh" }}>
              <iframe
                src="https://www.youtube.com/embed/fPWfTaDFaLg"
                title="JXSRMA - Athena"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="music-container-card" id="2023">
        <div className="year-heading">2023</div>
        <div className="music-year">2023</div>
        <div className="music-card-grid">
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="music-container-card" id="2022">
        <div className="year-heading">2022</div>
        <div className="music-year">2022</div>
        <div className="music-card-grid">
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="music-container-card" id="2021">
        <div className="year-heading">2021</div>
        <div className="music-year">2021</div>
        <div className="music-card-grid">
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="music-container-card" id="2020">
        <div className="year-heading">2020</div>
        <div className="music-year">2020</div>
        <div className="music-card-grid">
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="music-container-card" id="2019">
        <div className="year-heading">2019</div>
        <div className="music-year">2019</div>
        <div className="music-card-grid">
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
          <div className="music-card">
            <div className="music-image">
              <img src="https://i.ibb.co/Lhczqwj/unknown.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
