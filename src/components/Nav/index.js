import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="app_nav">
      <div className="logo">
        <h6>Q</h6>
        <div>
          <h6>Premium</h6>
          <p>...</p>
        </div>
      </div>
      <div className="menus">
        <span>Menu</span>
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Nav;
