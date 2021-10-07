import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../images/logo.PNG";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="app_nav">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menus">
        <span className="">Menu</span>
        <AiOutlineMenu className="icon" />
      </div>
    </div>
  );
};

export default Nav;
