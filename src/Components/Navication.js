import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./Navication.css";
import { Link } from "react-router-dom";

function Navication() {
  return (
    <div className="main-container">
      <Link to="/">
        <HomeIcon className="Homeicon" />
      </Link>
      <Link to="search">
        <SearchOutlinedIcon className="Searchicon" />
      </Link>
      <Link to="explore">
        <ExploreOutlinedIcon className="exploreicon" />
      </Link>
      <Link to="message">
        <TextsmsRoundedIcon className="msgIcon" />
      </Link>
      <Link to="profile">
        <AccountCircleRoundedIcon className="profileIcon" />
      </Link>
    </div>
  );
}

export default Navication;
