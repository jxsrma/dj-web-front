import React, { useEffect } from "react";

import "../css/contact.css";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="contact-main">
      <div className="contact-heading">
        <h1>Hey! Whats up</h1>
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
        <form action="get">
          <h1>Fill this form</h1>
          <div className="form-field">
            <label htmlFor="fName" placeholder="Name">
              Name
            </label>
            <input type="text" id="fName" required />
          </div>
          <div className="form-field">
            <label htmlFor="email" placeholder="Name">
              E-Mail
            </label>
            <input type="email" id="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="subject" placeholder="Name">
              Subject
            </label>
            <input type="text" id="subject" required />
          </div>
          <div className="form-field">
            <label htmlFor="subject" placeholder="Name">
              Message
            </label>
            <textarea type="text" id="subject" required />
          </div>
          <div className="form-field">
            <button className="contact-send-btn">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
