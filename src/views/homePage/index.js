import React from "react";
import Bottom from "../../components/Bottom";
import Nav from "../../components/Nav";
import Top from "../../components/Top";
import "./homePage.scss";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="app_container">
        <Top />
        <Bottom />
      </div>
    </>
  );
};

export default HomePage;
