import React from "react";
import "./contact-card.css";
import { deleteDoc, doc } from "firebase/firestore";
import firestore from "../../../../firebaseConfig/firebase";
function ContactCard(props) {
  const handleDelete = async (id) => {
    try {
      const contactRef = doc(firestore, "userContactRecords", String(id));
      console.log(contactRef);
      console.log(id);

      await deleteDoc(contactRef);
      console.log("done");
    } catch (error) {
      console.log("Error deleting document:", error);
    }
  };
  return (
    <div className="cc-main">
      <div>Name: {props.name}</div>
      <div>Email: {props.email}</div>
      <div>Date: {props.timestamp}</div>
      <hr />
      <div>Subject: {props.subject}</div>
      <div>Message: {props.message}</div>
      <button
        onClick={() => {
          handleDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ContactCard;
