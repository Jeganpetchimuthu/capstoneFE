import React, { useState } from "react";
import "./AddAccount.css";
import axios from "axios";

function AddAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://capstonebe-sfwx.onrender.com/api/register",
        {
          email,
          password,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-account">
      <form className="form-add" onSubmit={handleSubmit}>
        <input
          className="user-add"
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          className="user-add"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>

        <button className="add-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddAccount;
