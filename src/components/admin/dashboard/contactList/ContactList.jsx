import React, { useEffect, useState } from "react";
import "./contact-list.css";
import { collection, onSnapshot } from "firebase/firestore";
import firestore from "../../../firebaseConfig/firebase";
import ContactCard from "./contactCard/ContactCard";
import { useNavigate } from "react-router-dom";

function ContactList() {
  const [allMessages, setAllMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const deleteData = onSnapshot(
      collection(firestore, "userContactRecords"),
      (snapshot) => {
        const fetchData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        fetchData.sort((a, b) => a.timestamp - b.timestamp);
        setAllMessages(fetchData);
      }
    );

    return () => deleteData();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="cl-main">
      <button onClick={handleGoBack} className="cl-back">
        <i class="fa-solid fa-arrow-left"></i>{" "}Go Back
      </button>
      {allMessages.length > 0 ? (
        allMessages.map((message, index) => (
          <ContactCard
            key={index}
            id={message.id}
            name={message.name}
            email={message.email}
            subject={message.subject}
            message={message.message}
            timestamp={message.timestamp.toDate().toLocaleString()}
          />
        ))
      ) : (
        <div>
          <br />
          <br />
          No Contacts
        </div>
      )}
    </div>
  );
}

export default ContactList;
