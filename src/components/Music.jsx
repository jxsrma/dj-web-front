import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../css/music.css";
import firestore from "./firebaseConfig/firebase";
import { collection, getDocs } from "firebase/firestore";
function Music() {
  const [year, setYear] = useState("latest");
  const [allValue, setAllValue] = useState([]);
  const fetchData = async () => {
    try {
      const colRef = collection(firestore, "music");
      const querySnapshot = await getDocs(colRef);

      const fetchData = [];
      querySnapshot.forEach((doc) => {
        const musicData = doc.data();
        fetchData.push({ id: doc.id, ...musicData });
      });
      setAllValue(fetchData);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    fetchData();
  }, []);

  const releasesByYear = allValue.reduce((acc, release) => {
    const { year } = release;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(release);
    return acc;
  }, {});

  const sortedYears = Object.keys(releasesByYear).sort((a, b) => b - a);

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
          {sortedYears.map((year) => (
            <li>
              <Link
                to={year}
                className={
                  year === { year } ? "music-release-years-active" : ""
                }
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setYear({ year })}
              >
                {year}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="music-container-card" id="latest">
        <div className="year-heading">LATEST</div>
        <div className="music-year">Latest</div>
        <div className="music-card-grid">
          <div className="music-card">
            <div className="music-iframe">
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

      {sortedYears.map((year) => (
        <div className="music-container-card" id={year}>
          <div className="year-heading">{year}</div>
          <div className="music-year">{year}</div>

          <div className="music-card-grid">
            {releasesByYear[year].map((release) => (
              <div className="music-card">
                <div className="music-image">
                  <a
                    href={release.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={release.album} alt="" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Music;
