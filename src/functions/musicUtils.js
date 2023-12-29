import { doc, getDoc } from "firebase/firestore";
import firestore from "../components/firebaseConfig/firebase";

export const groupReleasesByYear = (releases) => {
  return releases.reduce((acc, release) => {
    const { year } = release;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(release);
    return acc;
  }, {});
};

export const getSortedYears = (releasesByYear) => {
  return Object.keys(releasesByYear).sort((a, b) => b - a);
};

export const sortTracksByMonth = (tracks) => {
  return tracks.sort((a, b) => b.month - a.month);
};

export const fetchYoutubeLink = async () => {
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
        return youtubeVideoLink;
      }
    }
  } catch (error) {
    alert("Error fetching YouTube link");
    // console.error("Error fetching YouTube link:", error);
  }
};
