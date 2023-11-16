import React, { useState } from "react";
import "./Logout.css";
import axios from "axios";

function Logout() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://capstonebe-sfwx.onrender.com/auth",
        formData
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="logout-container">
      <form className="form-logout" onSubmit={handleSubmit}>
        <input
          className="user-logout"
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>

        <input
          className="user-logout"
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <button className="logout-button">Logout</button>
      </form>
    </div>
  );
}

export default Logout;
