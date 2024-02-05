import React, { useEffect, useState } from "react";
import "./song.css";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import firestore from "../../../../../firebaseConfig/firebase";
import { Toaster, toast } from "sonner";
function Song() {
  const { id } = useParams();

  const [link, setLink] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const fetchDocument = async () => {
      try {
        const docRef = doc(collection(firestore, "music"), id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          // Check if the link is a YouTube link
          if (isYouTubeLink(data.link)) {
            const embedLink = convertToEmbedLink(data.link);
            console.log(embedLink);
            setLink(embedLink);
          } else {
            console.log(data.link);
            setLink(data.link);
          }
        } else {
          toast.error("No such document!");
        }
      } catch (error) {
        toast.error("Error in fetching");
        // console.error("Error fetching document:", error);
      }
    };

    const isYouTubeLink = (link) => {
      return link.includes("youtube.com");
    };

    const convertToEmbedLink = (youtubeLink) => {
      const videoId = extractVideoId(youtubeLink);
      return `https://www.youtube.com/embed/${videoId}`;
    };
    const extractVideoId = (youtubeLink) => {
      const match = youtubeLink.match(
        // eslint-disable-next-line
        /(?:youtu\.be\/|youtube\.com\/(?:.*\/(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/(?:.*\/(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/
      );
      return match && match[1];
    };

    fetchDocument();
    // eslint-disable-next-line
  }, []);

  const handleGoBack = () => {
    window.close();
  };

  return (
    <div className="s-main">
      {/* <div> */}
      <button onClick={handleGoBack} className="cl-back">
        <i class="fa-solid fa-arrow-left">&nbsp;Go&nbsp;Back</i>
      </button>
      <iframe src={link} title="Track" frameborder="0"></iframe>
      {/* </div> */}
      <Toaster />
    </div>
  );
}

export default Song;
