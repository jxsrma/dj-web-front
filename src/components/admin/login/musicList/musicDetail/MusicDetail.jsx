import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./music-detail.css";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
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
  const [musicData, setMusicData] = useState({
    album: "",
    artist: "",
    date: "",
    genre: "",
    id: "",
    link: "",
    month: "",
    title: "",
    year: "",
  });

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ID:", id);
    const fetchDocument = async () => {
      try {
        const docRef = doc(collection(firestore, "music"), id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setMusicData(data);
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
      const musicCollection = collection(firestore, "music");
  
      // If the user has entered a custom ID, use it. Otherwise, Firestore will generate a unique ID.
      if (customId) {
        await addDoc(musicCollection, newMusicData, { id: customId });
      } else {
        await addDoc(musicCollection, newMusicData);
      }
  
      console.log("Document added successfully!");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Add this line to prevent form submission
    // Your code here
  };

  return (
    <div className="md-main">
      <div className="md-form">
        <form onSubmit={handleSubmit}>
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
            <button onClick={handleUpdate}>Update</button>
            <button className="delete">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MusicDetail;
