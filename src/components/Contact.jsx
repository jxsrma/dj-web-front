import React, { useState, useEffect } from "react";
import firestore from "./firebaseConfig/firebase";
import { collection, addDoc } from "firebase/firestore";

import "../css/contact.css";

function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, subject, message } = userData;

    try {
      const docRef = await addDoc(collection(firestore, "userContactRecords"), {
        name,
        email,
        subject,
        message,
      });

      alert("Data Stored with ID: " + docRef.id);

      setUserData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Internal Server Error");
    }
  };

  return (
    <div className="contact-main">
      <div className="contact-heading">
        <h1>Hey! Whats up?</h1>
        <p>
          📩✨ Feel free to drop me a message anytime! Whether you want to
          discuss music, technology, or just share your thoughts, I'm all ears.
        </p>
        <p>
          🎵💬 Your feedback and ideas mean the world to me. Let's connect and
          keep the conversation going. Reach out through the contact form below,
          and I'll get back to you as soon as possible. Thanks for being a part
          of this incredible journey! 🚀🌟
        </p>
      </div>
      <div className="contact-form">
        <form>
          <h1>Fill this form</h1>
          <div className="form-field">
            <label htmlFor="name">📛 Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={userData.name}
              onChange={postUserData}
              placeholder="Name"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">📧 E-Mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={postUserData}
              placeholder="E-mail"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="subject">💼 Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={userData.subject}
              onChange={postUserData}
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">✍️ Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              value={userData.message}
              onChange={postUserData}
              placeholder="Write Here"
              required
            />
          </div>
          <div className="form-field">
            <button className="contact-send-btn" onClick={submitData}>
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;