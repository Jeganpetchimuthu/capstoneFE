import React from "react";
import "./HomeImage.css";

function HomeImage() {
  return (
    <div className="icon">
      {/* <PinterestIcon className="pinterest-icon" /> */}
      <img
        className="logo"
        src="https://www.svgrepo.com/show/172003/pinterest-social-logo.svg"
        alt="img"
      />
    </div>
  );
}

export default HomeImage;
