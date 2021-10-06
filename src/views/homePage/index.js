import React from "react";
import Nav from "../../components/Nav";
import Top from "../../components/Top";
import "./homePage.scss";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="app_container">
        <Top />
      </div>
    </>
  );
};

export default HomePage;
