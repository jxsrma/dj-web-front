import React, { useEffect, useState } from "react";
import "./musiclist.css";
import { collection, getDocs } from "firebase/firestore";
import firestore from "../../../firebaseConfig/firebase";
import {
  getSortedYears,
  groupReleasesByYear,
  sortTracksByMonth,
} from "../../../../functions/musicUtils";
import { useNavigate } from "react-router-dom";

function MusicList() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchData();
    // console.log(selectedYear);
  }, []);

  const handleClick = (id) => {
    navigate("/admin/music/view/" + id);
  };

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

  const handleGoBack = () => {
    navigate(-1);
  };

  const releasesByYear = groupReleasesByYear(allValue);
  const sortedYears = getSortedYears(releasesByYear);
  // console.log(releasesByYear);
  return (
    <div className="ml-main">
      <div className="ml-card">
        <div className="mc-main">
          <button onClick={handleGoBack}>
            <i class="fa-solid fa-arrow-left"></i> Go Back
          </button>
          <br />

          <button
            onClick={() => {
              handleClick("new");
            }}
          >
            Add New
          </button>
        </div>
      </div>
      {sortedYears.map((year) =>
        sortTracksByMonth(releasesByYear[year]).map((track) => (
          <div className="ml-card" key={track.id}>
            <div className="mc-main">
              <button onClick={() => handleClick(track.id)}>
                {track.title}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MusicList;
