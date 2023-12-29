import React, { useEffect } from "react";
import "./dash.css";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    if (user === null) {
      navigate("/admin/login");
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  const handleClick = (action) => {
    if (action === "music") {
      navigate("/admin/music");
    }
    if (action === "youtube") {
      navigate("/admin/youtube");
    }
    if (action === "contact") {
      navigate("/admin/contact");
    }
    if (action === "logout") {
      sessionStorage.setItem("user", JSON.stringify(null));
      navigate("/admin/login");
    }
  };

  return (
    <div className="dash-main">
      <div className="dash-cont">
        <div className="dash-cont-button">
          <button onClick={() => handleClick("music")}>Music</button>
          <button onClick={() => handleClick("youtube")}>Youtube</button>
          <button onClick={() => handleClick("contact")}>Contact</button>
          <button onClick={() => handleClick("logout")}>LogOut</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
