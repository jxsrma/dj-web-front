import React, { useState, useEffect } from "react";
import "./loadingScreen.css";

function Loading() {
  // Create a state variable to control when to hide the loading screen
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading by setting a timeout
  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time (in milliseconds) as needed
    return () => clearTimeout(fakeLoading);
  }, []);

  return (
    <div>
      <div className={`loading-screen ${isLoading ? "loading-show" : ""}`}>
        <div className="loader">
        Loading
        </div>
      </div>
    </div>
  );
}

export default Loading;
