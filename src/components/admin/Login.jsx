import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../firebaseConfig/firebase"; // Import your Firebase configuration

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const auth = getAuth(firebase);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // User signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);
    } catch (error) {
      // Handle errors here
      console.error("Error signing up:", error);
    }
  };

  const handleSignIn = async () => {
    const auth = getAuth(firebase);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
    } catch (error) {
      // Handle errors here
      console.error("Error signing in:", error);
    }
  };

  return (
    <div style={{ color: "white", minHeight: "100vh", padding: "10vh" }}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default Login;
