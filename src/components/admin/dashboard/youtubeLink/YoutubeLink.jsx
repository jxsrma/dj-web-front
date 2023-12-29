import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import firestore from "../../../firebaseConfig/firebase";
import { fetchYoutubeLink } from "../../../../functions/musicUtils";
import { useNavigate } from "react-router-dom";
import "./youtube-link.css"
function YoutubeLink() {
  const [youtubeLink, setYoutubeLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchYTData = async () => {
      const youtubeLink = await fetchYoutubeLink();
      setYoutubeLink(youtubeLink);
    };
    fetchYTData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedLink = youtubeLink;
    try {
      const docRef = doc(collection(firestore, "links"), "youtube");
      await updateDoc(docRef, { link: updatedLink });
      console.log("Document updated successfully!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Add this line to prevent form submission
    // Your code here
  };

  return (
    <div className="yl-main">
      <div className="yl-form">
        <form
        onSubmit={handleSubmit}
        >
          <div className="yl-form-input">
            <label htmlFor="link">https://www.youtube.com/embed/</label>
            <input
              type="text"
              id="link"
              onChange={(e) => {
                setYoutubeLink(e.target.value);
              }}
              value={youtubeLink}
            />
          </div>
          <div className="yl-form-button">
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleGoBack}>
              <i class="fa-solid fa-arrow-left">&nbsp;Go&nbsp;Back</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default YoutubeLink;
//https://www.youtube.com/watch?v=SQafz5PSEjA

//https://www.youtube.com/embed/fPWfTaDFaLg
