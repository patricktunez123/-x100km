import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import logo from "../../images/logo.PNG";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="app_nav">
      <div className="loader"></div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menus">
        <span className="">Menu</span>
        <IoMenuOutline className="icon" />
      </div>
    </div>
  );
};

export default Nav;
