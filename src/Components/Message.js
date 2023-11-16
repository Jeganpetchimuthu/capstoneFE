import React from "react";

import "./Message.css";
import { Link } from "react-router-dom";
function Message() {
  return (
    <div className="Message">
      <h3 className="msg-content">Share Idea With Your Friends</h3>
      <Link to="/mail">
        <input
          className="msg-input_box"
          type="searchbox"
          placeholder="Search by name or email address"
        />
      </Link>
    </div>
  );
}

export default Message;
