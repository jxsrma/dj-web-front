import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import MusicList from "./dashboard/musicList/MusicList";

import MusicDetail from "./dashboard/musicList/musicDetail/MusicDetail";
import Error404 from "../Web/pages/error404/Error404";
import ContactList from "./dashboard/contactList/ContactList";
import YoutubeLink from "./dashboard/youtubeLink/YoutubeLink";

function Admin() {
  const navigate = useNavigate();

  const handleUser = () => {
    const storedUser = sessionStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    if (user === null) {
      navigate("/admin/login");
    } else {
      navigate("/admin/dashboard");
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    handleUser();
  }, []);

  return (
    <Routes>
      <Route exact path="/login" element={<Login title="Admin login 💰" />} />
      <Route path="/dashboard" element={<Dashboard title="Dashboard 🚧" />} />
      <Route path="/music" element={<MusicList title="Music 🚧" />} />
      <Route path="music/view/:id" element={<MusicDetail />} />
      <Route path="/youtube" element={<YoutubeLink title="Youtube 🚧" />} />
      <Route path="contact" element={<ContactList />} />
      <Route path="/*" element={<Error404 title="Error 🚧" />} />
    </Routes>
  );
}

export default Admin;
