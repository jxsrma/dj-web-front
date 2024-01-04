import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./music.css";
import firestore from "../../../../firebaseConfig/firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  groupReleasesByYear,
  getSortedYears,
  fetchYoutubeLink,
} from "../../../../../functions/musicUtils";
import {
  loadMusic,
  loadYoutube,
} from "../../../../../store/actions/music-actions";
import { useDispatch, useSelector } from "react-redux";

// Fetch Music Details

function Music() {
  const [youtubeLink, setYoutubeLink] = useState("");

  const [selectedYear, setSelectedYear] = useState("latest");
  const [allValue, setAllValue] = useState([]);
  const [releasesByYear, setReleasesByYear] = useState([]);
  const [sortedYears, setSortedYears] = useState([]);

  const dispatch = useDispatch();
  const music = useSelector((state) => state.music.musicList);
  const youtube = useSelector((state) => state.music.youtube);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    fetchData();
  }, []);

  useEffect(() => {
    if (music.length > 0) {

      setAllValue(music);
      setReleasesByYear(groupReleasesByYear(music));
      setSortedYears(getSortedYears(groupReleasesByYear(music)));
    }
  }, [music]);

  const fetchData = async () => {
    try {
      await dispatch(loadMusic());
      await dispatch(loadYoutube());
      setYoutubeLink(youtube);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
              {/* {console.log(youtubeLink)} */}
              <iframe
                src={"https://www.youtube.com/embed/" + youtubeLink}
                title="youtube"
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
                      href={"/release/" + release.id}
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
