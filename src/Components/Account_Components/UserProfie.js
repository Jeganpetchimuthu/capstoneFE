import React from "react";
import "./User_Profile.css";
import { Link } from "react-router-dom";
function UserProfie() {
  return (
    <div className="user_prfie">
      <h4 className="settings">Settings</h4>
      <div className="account-nav">
        <h4>Account</h4>
        <Link to="/public-Profile">
          <h3 className="add-profie">Public Profile</h3>
        </Link>
        <h3 className="add-profie">Notification</h3>
        <h3 className="add-profie">Privacy and Policy</h3>
      </div>
      <div className="login-nav">
        <h4>Login</h4>
        <Link to="/add-accont">
          <h3 className="add-profie">Add Account</h3>
        </Link>
        <Link to="/logout">
          <h3 className="add-profie">Logout</h3>
        </Link>
      </div>
      <div className="login-nav">
        <h4>Support</h4>
        <h3 className="add-profie">Get help</h3>
        <h3 className="add-profie">Terms of Service</h3>
        <h3 className="add-profie">Privacy Policy</h3>
        <h3 className="add-profie">About</h3>
      </div>
    </div>
  );
}

export default UserProfie;
