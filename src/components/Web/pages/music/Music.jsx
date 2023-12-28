import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./music.css";
import firestore from "../../../firebaseConfig/firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  groupReleasesByYear,
  getSortedYears,
} from "../../../../functions/musicUtils";

// Fetch Music Details

function Music() {
  // use effect

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchData();
    // console.log(selectedYear);
  }, []);

  const [selectedYear, setSelectedYear] = useState("latest");

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

  // group releases by year

  const releasesByYear = groupReleasesByYear(allValue);
  const sortedYears = getSortedYears(releasesByYear);
  return (
    <div className="music-container" id="music-top">
      <div className="music-heading">All Releases</div>
      <div className="music-release-years">
        <ul>
          <li>
            <Link
              to="music-top"
              className={
                selectedYear === "latest" ? "music-release-years-active" : ""
              }
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setSelectedYear("latest")}
            >
              Latest
            </Link>
          </li>
          {sortedYears.map((year) => (
            <li>
              <Link
                to={year}
                className={
                  selectedYear === year ? "music-release-years-active" : "" //console.log(year)
                }
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => {
                  setSelectedYear(year);
                }}
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder={0}
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
            {releasesByYear[year]
              .sort((a, b) => b.month - a.month)
              .map((release) => (
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
