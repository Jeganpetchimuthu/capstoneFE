import React from "react";
import "./SearchIcon.css";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
function SreachIcon() {
  return (
    <div className="SearchIcon">
      <input
        className="search_cols"
        type="search"
        placeholder="Search for ideas"
      />
      <CameraAltOutlinedIcon />
    </div>
  );
}

export default SreachIcon;
