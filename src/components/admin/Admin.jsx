import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import MusicList from "./login/musicList/MusicList";

import MusicDetail from "./login/musicList/musicDetail/MusicDetail";
import Error404 from "../error404/Error404";

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
    handleUser();
  }, []);

  return (
    <Routes>
      <Route exact path="/login" element={<Login title="Admin login 💰" />} />
      <Route path="/dashboard" element={<Dashboard title="Dashboard 🚧" />} />
      <Route path="/music" element={<MusicList title="Music 🚧" />} />
      <Route path="music/view/:id" element={<MusicDetail />} />
      <Route path="/*" element={<Error404 title="Error 🚧" />} />
    </Routes>
  );
}

export default Admin;
