import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./music-detail.css";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import firestore from "../../../../firebaseConfig/firebase";

function MusicDetail() {
  const { id } = useParams();
  const [artist, setArtist] = useState();
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [album, setAlbum] = useState();
  const [link, setLink] = useState();
  const [trackId, setTrackId] = useState();

  const [isNew, setIsNew] = useState(false);

  // const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    console.log("ID:", id);
    const fetchDocument = async () => {
      if (id !== "new") {
        try {
          const docRef = doc(collection(firestore, "music"), id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log(data);
            setArtist(data.artist);
            setTitle(data.title);
            setGenre(data.genre);
            setDate(data.date);
            setMonth(data.month);
            setYear(data.year);
            setAlbum(data.album);
            setLink(data.link);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      } else {
        setIsNew(true);
      }
    };

    fetchDocument();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedMusicData = {
      artist,
      title,
      genre,
      date,
      month,
      year,
      album,
      link,
    };
    try {
      const docRef = doc(collection(firestore, "music"), id);
      await updateDoc(docRef, updatedMusicData);
      console.log("Document updated successfully!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handleAdd = async (e, customId) => {
    e.preventDefault();

    const newMusicData = {
      artist,
      title,
      genre,
      date,
      month,
      year,
      album,
      link,
    };

    try {
      const musicRef = doc(firestore, "music", customId);

      await setDoc(musicRef, newMusicData);

      navigate("/admin/music");
    } catch (error) {
      alert("Error adding document:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const musicRef = doc(firestore, "music", String(id));
      console.log(musicRef);
      console.log(id);

      await deleteDoc(musicRef);
      console.log("done");
    } catch (error) {
      console.log("Error deleting document:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Add this line to prevent form submission
    // Your code here
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="md-main">
      <div className="md-form">
        <form onSubmit={handleSubmit}>
          {isNew ? (
            <div className="md-form-input">
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                onChange={(e) => {
                  setTrackId(e.target.value);
                }}
              />
            </div>
          ) : (
            ""
          )}
          <div className="md-form-input">
            <label htmlFor="artist">Artist:</label>
            <input
              type="text"
              id="artist"
              value={artist}
              onChange={(e) => {
                setArtist(e.target.value);
              }}
            />
          </div>
          <div className="md-form-input">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="md-form-input">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              value={genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
          </div>
          <div className="md-form-input">
            <label htmlFor="date">Date:</label>
            <div className="md-date">
              <input
                type="number"
                className="no-arrows"
                placeholder="Date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <input
                type="number"
                className="no-arrows"
                placeholder="Month"
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              />
              <input
                type="number"
                className="no-arrows"
                placeholder="Year"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="md-form-input">
            <label htmlFor="album">Album:</label>
            <input
              type="url"
              id="album"
              value={album}
              onChange={(e) => {
                setAlbum(e.target.value);
              }}
            />
          </div>
          <div className="md-form-input">
            <label htmlFor="link">Link:</label>
            <input
              type="url"
              id="link"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
          <div className="md-form-button">
            {isNew ? (
              <div>
                <button
                  onClick={(e) => {
                    handleAdd(e, trackId);
                  }}
                >
                  Add
                </button>
                <button onClick={handleGoBack}>
                  <i class="fa-solid fa-arrow-left">&nbsp;Go&nbsp;Back</i>
                </button>
              </div>
            ) : (
              <div>
                <button onClick={handleUpdate}>Update</button>
                <button
                  className="delete"
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  Delete
                </button>
                <button onClick={handleGoBack}>
                  <i class="fa-solid fa-arrow-left">&nbsp;Go&nbsp;Back</i>
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default MusicDetail;
