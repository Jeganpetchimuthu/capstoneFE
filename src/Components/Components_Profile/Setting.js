import React from "react";
import "./Setting.css";
import { Link } from "react-router-dom";
function Setting() {
  return (
    <div className="Settings">
      <h4 className="profile_row">profile</h4>
      <Link to="/user">
        <h3 className="settings_row">Settings</h3>
      </Link>
      <h3 className="edit_row">Edit Public Profile</h3>
      <h3 className="copy_row">Copy Profile Link</h3>
    </div>
  );
}

export default Setting;
