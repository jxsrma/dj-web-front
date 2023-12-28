import React, { useEffect, useState } from "react";
import "./login.css";
// import firestore from "../firebaseConfig/firebase";
// import { Firestore } from "firebase/firestore";
import firestore from "../../firebaseConfig/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const colRef = collection(firestore, "authentication");
      const docRef = doc(colRef, "admin-main");
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const adminData = docSnapshot.data();
        setAdmin(adminData);
      } else {
        alert("Admin not found");
      }
    } catch (error) {
      alert("Error: ", error);
    }
  };

  const handleLogIn = async (event) => {
    event.preventDefault();

    if (admin.username === username && admin.password === password) {
      sessionStorage.setItem("user", JSON.stringify(username));
      // const storedUser = sessionStorage.getItem('user');
      // const user = storedUser ? JSON.parse(storedUser) : null;
      navigate("/admin/dashboard");
    } else {
      alert("failed");
    }
  };

  return (
    <div
      style={{ color: "white", minHeight: "100vh", padding: "10vh" }}
      className="login-cont"
    >
      <form action="">
        <div className="login-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogIn}>Log In</button>
      </form>
    </div>
  );
}

export default Login;
