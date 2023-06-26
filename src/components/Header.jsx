import React from "react";

import img1 from "../assets/search-normal.png";
import img2 from "../assets/header-profile_picture.png";
import img3 from "../assets/header-icon-1.png";
import img4 from "../assets/header-icon-2.png";
import img5 from "../assets/header-icon-3.png";

import "../Style/Header.css";
const Header = () => {
  return (
    <div className="header-parent">
      <div className="Header-input">
        <img src={img1} alt="my_image" className="header-search-img" />
        <input
          type="search"
          placeholder="Search Anything"
          className="header-input-search"
        />
      </div>
      <div className="header-icons">
        <img src={img3} alt="my-image" className="header-icon" />
        <img src={img4} alt="my-image" className="header-icon" />
        <img src={img5} alt="my-image" className="header-icon" />
      </div>
      <div className="header-profile">
          <img src={img2} alt="my-image" className="header-profile-image"/>
      </div>
    </div>
  );
};

export default Header;
