import React, { useState } from "react";
import "./Mail.css";
import axios from "axios";
function Mail() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://capstonebe-sfwx.onrender.com/api/mail", text)

        .then((res) => setText(res.text));

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className="mail-content">
      <span>
        <h3 className="cols-msg"> New Mesage</h3>
        <button onClick={handleSubmit} className="send" type="submit">
          send
        </button>
      </span>
      <br></br>
      <br></br>
      <br></br>
      <input
        className="mail-text"
        type="text"
        value={text}
        placeholder="Search by name or email address"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Mail;
