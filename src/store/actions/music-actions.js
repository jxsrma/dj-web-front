import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import firestore from "../../components/firebaseConfig/firebase";
import { musicActions } from "../slices/music-slice";

export const loadMusic = () => {
  return async (dispatch) => {
    try {
      const colRef = collection(firestore, "music");
      const querySnapshot = await getDocs(colRef);

      const fetchData = [];
      querySnapshot.forEach((doc) => {
        const musicData = doc.data();
        fetchData.push({ id: doc.id, ...musicData });
      });

      console.log("Fetched Data:", fetchData);

      dispatch(musicActions.setMusicList(fetchData));
      return true;
    } catch (error) {
      console.error("Error fetching music:", error);
      return false;
    }
  };
};

export const loadYoutube = () => {
  return async (dispatch) => {
    try {
        // Replace 'yourCollection' and 'yourDocument' with your actual collection and document names
        const docRef = doc(firestore, "links", "youtube");
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          const data = docSnap.data();
          // Assuming you have a 'youtube' field in your document
          const youtubeVideoLink = data?.link;
    
          if (youtubeVideoLink) {
            // console.log(youtubeVideoLink);
            dispatch(musicActions.setYoutube(youtubeVideoLink));
          }
        }
      } catch (error) {
        alert("Error fetching YouTube link");
        // console.error("Error fetching YouTube link:", error);
      }
  };
};
