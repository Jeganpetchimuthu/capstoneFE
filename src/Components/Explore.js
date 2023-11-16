import React from "react";
import "./Explore.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PushPinIcon from "@mui/icons-material/PushPin";
import GridViewIcon from "@mui/icons-material/GridView";
function Explore() {
  return (
    <div className="Explore">
      <div className="icon-header">
        <h3 className="icon-content">Start Creating now</h3>
        <span className="pin-icon">
          <DashboardIcon className="icon-flex" />
        </span>

        <span className="pin-icon1">
          <PushPinIcon className="icon-flex1" />
        </span>

        <span className="pin-icon2">
          <GridViewIcon className="icon-flex2" />
        </span>

        <span className="pin">IdeaPin</span>
        <span className="pin1">Pin</span>
        <span className="pin2">Board</span>
      </div>
    </div>
  );
}

export default Explore;
