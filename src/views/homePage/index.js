import React from "react";
import Bottom from "../../components/Bottom";
import Nav from "../../components/Nav";
import Top from "../../components/Top";
import Footer from "../../components/Footer";
import MenuBottom from "../../components/MenuBottom";
import "./homePage.scss";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="app_container">
        <Top />
        <Bottom />
      </div>
      <Footer />
      <MenuBottom />
    </>
  );
};

export default HomePage;
