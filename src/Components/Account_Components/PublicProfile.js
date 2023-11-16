import React, { useState } from "react";
import "./PublicProfile.css";

import axios from "axios";

function PublicProfile() {
  const [Profile, setProfile] = useState([
    {
      FirstName: "",
      SureName: "",
      UserName: "",
    },
  ]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...Profile, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://capstonebe-sfwx.onrender.com/api/profile", {
        Profile,
      });

      console.log(Profile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="public_profile">
      <form className="form_container">
        <label className="lable-content" htmlFor="FirstName">
          FirstName:
          <br></br>
          <br></br>
          <input
            className="public_profile-user"
            type="text"
            name="FirstName"
            placeholder="FirstName"
            value={Profile.FirstName}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label className="lable-content" htmlFor="SureName">
          SureName:
          <br></br>
          <br></br>
          <input
            className="public_profile-user"
            type="text"
            name="SureName"
            placeholder="SureName"
            value={Profile.SureName}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <br></br>
        <label className="lable-content" htmlFor="UserName">
          UserName:
          <br></br>
          <br></br>
          <input
            className="public_profile-user"
            type="text"
            name="UserName"
            placeholder="UserName"
            value={Profile.UserName}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <br></br>
        <button className="done-btn" type="submit" onClick={handleSubmit}>
          Done
        </button>
      </form>
    </div>
  );
}

export default PublicProfile;
